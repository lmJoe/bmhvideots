/* src\views\home\index.tsx */
import { FC, useEffect,useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContentStyle, HeaderDivPlay, Main, footerStyle,LeftBox} from "../static/css";
import { Layout, Space } from "antd";
import { Footer,Content } from "antd/es/layout/layout";
import { ReducerState } from "../store";
import Player from "../components/play/play";
import RightVideoPage from "../components/play/rightVideo";
import CenterVideoPage from "../components/play/content";

function VideoPage() {
  const {channelId,channelList} = useSelector((state:ReducerState) => state.channelPage);
  useEffect(()=>{
    console.log("更改channelid",channelId)
    
  },[])
  function getTypeid(typeid: any): void {
    
  }
  
  return ( 
    <Main>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout style={{background:'#fff'}}>
        <HeaderDivPlay>
          <div className="headerBox">
            <a href="" className="logo"></a>
            <ul className="menu">
              {channelList && channelList.map((item:any, index: any) => (
                <li className="listBox" key={`${index}`} onClick ={() => getTypeid(item.typeid)}>
                  <span className="name" >{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </HeaderDivPlay>
        <Content style={ContentStyle}>
          <LeftBox>
            <Player></Player>
            <CenterVideoPage></CenterVideoPage>
          </LeftBox>
          <RightVideoPage></RightVideoPage>
        </Content>
        
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
    </Main>
  );
}
export default VideoPage;