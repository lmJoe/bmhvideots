/* src\views\home\index.tsx */
import { Button } from "antd";
import { Link } from "react-router-dom";
// 导入使用状态
import { FC, useEffect,useState,useRef } from "react";
import { getChannelList } from "../../http/api";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../store";
import { LeftList,NameChose } from "../../static/css/left";
interface channelListType {
  get(arg0: string): import("react").ReactNode;
  typeid:string,
  name:string,
}

let channelArr:channelListType[];
function HomeLeft(props:any) {
    // 单击
    //拿到store中的dispatch函数，触发action
    const dispatch = useDispatch();
    const {channelId,channelList} = useSelector((state:ReducerState) => state.channelPage);
    useEffect(()=>{

      
    },[])
    
    const getTypeid = (typeid: string) => {
      //添加样式
      if(channelId==typeid){
        //存储频道id
        // setChannelID(typeid);
        // dispatch({
        //   type: 'recommend_channel_id',
        //   payload: {
        //     channelId: typeid,
        //   },
        // })
        
      }else{
        //存储频道id
        // dispatch({
        //   type: 'recommend_channel_id',
        //   payload: {
        //     channelId: typeid,
        //   },
        // })
        props.setLoadingBoolean(true)
        props.setChannelID(typeid)
      }
      
      // dispatch(channel.actions.choseChannel(typeid))
    }
    return ( 
      <LeftList>
      <img className="logo" src="//static01.pomoho.com/img/www/2017new/bmh_nav_logo.jpg" alt="" />
      {channelList && channelList.map((item, index) => (
        <div className="listBox" key={`${index}`} onClick ={() => getTypeid(item.typeid)}>
          {/* item.typeid == channelid ? NameChose : NameChose */}
          <span className="name" >{item.name}</span>
        </div>
      ))}
    </LeftList>
    );
}
export default HomeLeft;