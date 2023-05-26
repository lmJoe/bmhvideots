/* src\views\home\index.tsx */
import { Button, Col, Layout, Row, Space } from "antd";
import { Link, useNavigate,useLocation } from "react-router-dom";

// 导入使用状态
import { useEffect,useState,useRef } from "react";
import HomeLeft from '../components/home/left'
import { Content, Footer } from "antd/es/layout/layout";
import { ContentStyle,FooterPadding,footerStyle,HeaderDiv,Main,RightDiv } from "../static/css";
import { useDispatch, useSelector } from "react-redux";
import { getChannelList, getVideoPageList } from "../http/api";
import ListContent from "../components/home/content";
import HomeRight from "../components/home/right";
import md5 from 'js-md5';
import { appkey, getRandomNum } from "../static/js/common";
import { ReducerState } from "../store";
import { Scroll } from "../components/scroll";
import useCallbackState from "../static/js/useCallbackState";

interface getVideoParamsType {
  appKey: string
  pageSize: number,
  pageIndex?:number,
  channelId:string,
  ts:number,
  rd:number,
  tk:string,

}
function Welcome() {
    const location = useLocation()
    const dispatch = useDispatch()  //拿到store中的dispatch函数，触发action
    //获取video中的pageIndex的值
    const {channelId} = useSelector((state:ReducerState)=>{return state.channelPage})
    //设定视频列表存储
    const [videoListState, setVideoList] = useState<any>([]);
    //设定pageIndex的值
    const [pageIndex,setPageIndex] = useState<number>(1);
    //设定频道id
    // const [oldchannelidValue,setChannelID]=useCallbackState('');//封装调用案例
    const [oldchannelidValue,setChannelID]=useState<string>('');
    //设定加载布尔值
    const [loadingBoolean,setLoadingBoolean] = useState<boolean>(true);
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
      // if(num === 10) {
      //   getChannel()
      //   setNum(0);
      // }
      
      if(loadingBoolean){
        getChannel((data:any)=>{
          getVideoPage(data);
        });
      }
      
      return () => {
        console.log("logout");
      };
    },[loadingBoolean]) 

    // //菜单接口请求
    async function getChannel(callback: (data:any) => void){
      const res:any = await getChannelList();
      if(res.code == 1){
        dispatch({
          type: 'recommend_channel_list',
          payload: { channelList: res.data },
        })
        
        changeChannelidFun(res.data[0].typeid);
        callback(res.data[0].typeid);
      }
    }
    function changePageIndex(pageIndex: number){
      setPageIndex(pageIndex)
    }
    function changeLoadingBoolean(boolean:boolean){
      setLoadingBoolean(boolean)
    }
    function changeChannelidFun(data:string){
      setChannelID(data)
    }
    async function getVideoPage(data: string){
      console.log("channelId",channelId);
      console.log("oldchannelidValue",oldchannelidValue,);
      // let ts = parseInt((new Date().getTime() / 200).toString())
      let ts = 1681883811;
      let rd:number = getRandomNum(5, 50);
      let tk:string = md5(`${ts}_${rd}_${appkey}_${19}`).toUpperCase();
      let obj:getVideoParamsType = {
        appKey:appkey,
        pageSize:49,
        pageIndex:pageIndex,
        channelId:oldchannelidValue==''?data:oldchannelidValue,
        ts:ts,
        rd:rd,
        tk:tk,
      }
      const res:any = await getVideoPageList(obj);
      if(res.code==1){
        if(oldchannelidValue==(channelId==''?data:channelId)){
          setVideoList((videoListState:any[]) => videoListState.concat(res.data));
        }else{
          setVideoList(res.data);
        }
        dispatch({
          type: 'recommend_channel_id',
          payload: {
            channelId: oldchannelidValue==''?data:oldchannelidValue,
          },
        })
        changeLoadingBoolean(false)
        
      }
    }
    return ( 
      <Main>
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout style={{background:'#fff'}}>
          <HeaderDiv>
              <div className="title">欢迎来到爆米花视频 ^_^！</div>
              <RightDiv>
                <div className="upload"><a href="">上传视频</a></div>
                <div className="download">爆米花视频APP</div>
              </RightDiv>
          </HeaderDiv>
          <Content style={ContentStyle}>
            <HomeLeft setLoadingBoolean={changeLoadingBoolean} setChannelID={changeChannelidFun}></HomeLeft>
            {/* <Scroll height="100%" load={(data) => {
              setpageindex(pageindex => pageindex+1);
              setloadFirst(true);
            }}>
              <ListContent></ListContent>
            </Scroll> */}
            <ListContent videoListState={videoListState} setPageindex={changePageIndex} pageIndex={pageIndex} setLoadingBoolean={changeLoadingBoolean}></ListContent>
            <HomeRight></HomeRight>
          </Content>
          <Footer style={footerStyle}>
            <FooterPadding>
              <div className="footerTop">
                <a href="javascript:;">浙B2-20100382</a>
                <a href="javascript:;">浙B2-网上有害信息举报专区</a>
                <a href="javascript:;">网络110报警服务</a>
                <a href="javascript:;">浙公网安备 33011002013559号</a>
              </div>
              <div className="footerBottom">
                <a href="javascript:;">关于爆米花</a>
                <a href="javascript:;">招贤纳士</a>
                <a href="javascript:;">媒体声音</a>
                <a href="javascript:;">米花客户</a>
                <a href="javascript:;">用户指南</a>
                <a href="javascript:;">联系我们</a>
                <a href="javascript:;">友情链接</a>
                <a href="javascript:;">网站地图</a>
                <a href="javascript:;">家长监护</a>
              </div>
            </FooterPadding>
          </Footer>
        </Layout>
      </Space>
      </Main>
    );
}
export default Welcome;