/* src\views\home\index.tsx */
import { Button } from "antd";
import { Link } from "react-router-dom";
// 导入使用状态
import { useEffect,useState,useRef } from "react";
import { Main } from "../../static/css/right";
import { getTop50 } from "../../http/api";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../store";
import { replaceImgUrl } from "../../static/js/common";
import LazyLoad from "react-lazyload";
// import { getChannelList } from "../../http/api";
function HomeRight() {
  const dispatch = useDispatch()  //拿到store中的dispatch函数，触发action
  const {mediaList} = useSelector((state: ReducerState) => state.mediaPage)
  const [mediaVal, setMediaList] = useState([]);
  const mediaListRef = useRef(mediaVal);
  mediaListRef.current = mediaVal;
    // 单击
    useEffect(()=>{
      // if(menu.length<2){
      //   // 发起动作
      //   // dispath(getMenus())
      //   // 如果是admin页面跳转到admin/admin
      //   if(location.pathname==="/admin"){
      //     navigate('/admin/dash')
      //   }else{
      //     // 修正bug 跳转到对应页面
      //     navigate(location.pathname)
      //   }
      // }   
      getTopMedia()
      // dispatch({
      //   type: 'recommend_video_list',
      //   payload: {
      //     videoList:mediaListRef.current,
      //   },
      // })
    },[])
    async function getTopMedia(){
      await getTop50((data:any)=>{
        dispatch({
          type: 'recommend_media_list',
          payload: { mediaList: data.PartnerList },
        })
      });

    }
  function getTypeid(typeid: any): void {
    throw new Error("Function not implemented.");
  }

    return ( 
      <Main>
        <div className="bannerList">
          <a className="bannerBox" href="">
            <img className="banner-item" src="https://static01.pomoho.com/img/www/2017new/mohenews.png" alt="" />
          </a>
          <a className="bannerBox" href="">
            <img className="banner-item" src="https://static01.pomoho.com/img/www/2017new/zhejiangyq.png" alt="" />
          </a>
          <a className="bannerBox" href="">
            <img className="banner-item" src="https://static01.pomoho.com/img/www/2017new/weichengnian.png" alt="" />
          </a>
          <a className="bannerBox" href="">
            <img className="banner-item" src="https://static01.pomoho.com/img/www/2017new/suanfa.png" alt="" />
          </a>
        </div>
        <div className="friends">
          <h3>品牌合作专区</h3>
          <a className="bannerBox" href="">
            <img className="banner-item" src="https://static01.pomoho.com/img/www/2017new/xuduba.png" alt="" />
          </a>
          <a className="bannerBox" href="">
            <img className="banner-item" src="https://static01.pomoho.com/img/www/2017new/yangshengt.png" alt="" />
          </a>
          <a className="bannerBox" href="">
            <img className="banner-item" src="https://static01.pomoho.com/img/www/2017new/carfamily.png" alt="" />
          </a>
          <a className="bannerBox" href="">
            <img className="banner-item" src="https://static01.pomoho.com/img/www/2017new/mizijun.png" alt="" />
          </a>
          <a className="bannerBox" href="">
            <img className="banner-item" src="https://static01.pomoho.com/img/www/2017new/luobo.png" alt="" />
          </a>
        </div>
        <div className="top50">
          <h3>视频号推荐</h3>
          {mediaList && mediaList.map((item, index) => (
            <div className="mediaBox" key={`${index}`} onClick ={() => getTypeid(item.typeid)}>
              <a href="" className="headImg">
                <div className="avatar">
                  <LazyLoad>
                    <img src={replaceImgUrl(item.HeadImg)} />
                  </LazyLoad>
                </div>
                <span className="name" >
                  {item.NickName} 
                  {item.IsHighQuality==1 ? <em className="indent-tag1"></em>   : ''}
                </span>
              </a>
            </div>
          ))}
        </div>
      </Main>
    );
}

export default HomeRight;