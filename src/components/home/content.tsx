/* src\views\home\index.tsx */
import { Button, Row } from "antd";
import { Link, Navigate,useNavigate} from "react-router-dom";
// 导入使用状态
import { useEffect,useState,useRef } from "react";
import { getChannelList } from "../../http/api";
import { List, Main } from "../../static/css/content";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../store";
import LazyLoad from 'react-lazyload';
import { Scroll } from "../scroll";
import { replaceImgUrl } from "../../static/js/common";
import loadingImg from '../../static/image/loading.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
function ListContent(props:any){
    const {videoListState} =props;
    const dispatch = useDispatch()  //拿到store中的dispatch函数，触发action
    //获取video中的pageIndex的值
    const {pageIndex} = useSelector((state:ReducerState)=>{return state.videoPage})
    const {channelId} = useSelector((state:ReducerState)=>{return state.channelPage})
    
    const navigate = useNavigate()
    // 单击
    useEffect(()=>{
      
    },[channelId])

    function loadMore(): void {
      props.setPageindex(props.pageIndex+1);
      props.setLoadingBoolean(true)
      console.log(pageIndex);
    }
    function gotoPlay(videoId: any){
      props.setLoadingBoolean(true)
      navigate('/video?videoid='+videoId, { replace: false })
    }
    return (
      <Main>
        <List>
          {videoListState && videoListState.map((item:any, index:any) => (
            // return (index + 2) % 7 === 0 || (index + 1) % 7 === 0 ?
            <div className="list"  key={`${index}`} onClick ={() => gotoPlay(item.Video_ID)}>
              <div className="leftImg">
                <LazyLoadImage src={replaceImgUrl(item.CoverImgs)} placeholderSrc={loadingImg} width={178} height={100}></LazyLoadImage>
              </div>
              <div className="rightContent">
                <a className="title">{item.Title}</a>
                <div className="video-from">
                  <a href="" className="headImg">
                    {/* <LazyLoad>
                        <img src={replaceImgUrl(item.HeadImg)} />
                    </LazyLoad> */}
                    <LazyLoadImage src={replaceImgUrl(item.HeadImg)}></LazyLoadImage>
                  </a>
                  <a href="" className="mediaName">{item.NickName}
                    {item.IsHighQuality==1 ? <em></em>  : ''}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </List>
        <div className="loadMore" onClick={loadMore}>加载更多</div>
      </Main>
    )
    
}

export default ListContent;