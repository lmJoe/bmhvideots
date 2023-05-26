/* src\views\home\index.tsx */
import { FC, useEffect,useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlayerBox } from "../../static/css/video";
import JoLPlayer, { JoLPlayerRef, callBackType, qualityKey } from "jol-player";
import { useLocation, useSearchParams } from "react-router-dom";
import Jsonp from "../../http/jsonp";
import fetchjsonp from 'fetch-jsonp'
import { getVideoInfos, } from "../../http/api";
import { replaceImgUrl } from "../../static/js/common";
import { ReducerState } from "../../store";
import LazyLoad from "react-lazyload";

function PlayerPage() {
  const [theme, setTheme] = useState<string>("#ea3737");
  const videoRef = useRef<JoLPlayerRef>(null!);
  let [navigate] = useSearchParams();

  interface videoValueType{
    videoUrl:string,
    poster:string,
    FHDVideoUrl:string,//视频质量
    HDVideoUrl:string,//中视频质量
    SDVideoUrl:string,//高视频质量
    author:string,//作者名称
    tag:string,//标签
    title:string,//标题
    headImg:string,//头像
  }
  //设置视频接收参数
  const [state, setState] = useState<videoValueType>({
    videoUrl:'',
    poster:'',
    FHDVideoUrl:'',//视频质量
    HDVideoUrl:'',//中视频质量
    SDVideoUrl:'',//高视频质量
    author:'',//作者名称
    tag:'',//标签
    title:'',//标题
    headImg:'',//头像
  });


  //设置接口视频封面
  useEffect(()=>{
    //设置点击列表视频id更改
    getVideoInfo(navigate.get("videoid"));
  },[navigate.get("videoid")])
  /**
   * 视频结束时回调
   * @param val 
   */
  const onEndEd: callBackType = (val) => {
    console.log(`onEndEd`, val);
  };
  /**
   * 视频暂停时回调
   * @param val 
   */
  const onPause: callBackType = (val) => {
    console.log(`onPause`, val);
  };
  /**
   * 视频开始播放回调
   * @param val 
   */
  const onPlay: callBackType = (val) => {
    console.log(`onPlay`, val);
  };
  /**
   * 视频在播放，时间变化回调
   * @param val 
   */
  const onTimeChange: callBackType = (val) => {
    // console.log(`onTimeChange`, val);
  };
  /**
   * 视频播放失败的回调
   * @param val 
   */
  const onError = () => {
    console.log(`onError`);
  };
  /**
   * 	视频清晰度改变时的回调
   * @param val 
   */
  const onQualityChange: callBackType<qualityKey> = (val) => {
    console.log(`onQualityChange`, val);
  };
  
  async function getVideoInfo(videoId:any){
    const res:any = await getVideoInfos(videoId);
    if(res.code == 1){
      getVideoPlayInfo(res.data.Video_ID)
    }
  }
  async function getVideoPlayInfo(flvid:number){
    let options = {
      jsonpCallback:'jsoncallback',//回调参数的名称
      jsonpCallbackFunction:'zepto'+new Date().getTime(),//回调参数的名称的值
    }
    fetchjsonp(`https://play.pomoho.com/getvideourl.aspx?flvid=${flvid}&devicetype=wap&dataType=json`,options)
    .then(response => response.json())
    .then( data => {
      console.log("Data----",data)
      let playVideoUrl = "https://" + data.alipalyurl;
      let newState = JSON.parse(JSON.stringify(state));
      //存储视频地址、封面
      newState.FHDVideoUrl = playVideoUrl;
      newState.HDVideoUrl = playVideoUrl;
      newState.SDVideoUrl = playVideoUrl;
      newState.poster = replaceImgUrl(data.video_img).replace('/x/', '/854_480/');

      // newState.headImg = replaceImgUrl(data.grabphotourl);
      // newState.author = data.UserName;
      newState.title = data.title;
      

      setState(newState);
      videoRef.current.setVideoSrc(playVideoUrl);
      
    })
  }
  return ( 
    <PlayerBox>
      <div className="JoLPlayer">
        <JoLPlayer
          ref={videoRef}
          onPlay={onPlay}
          onPause={onPause}
          onEndEd={onEndEd}
          onError={onError}
          onTimeChange={onTimeChange}
          onQualityChange={onQualityChange}
          option={{
            videoSrc:state.videoUrl,
            width: 854,
            height: 480,
            poster:state.poster,
            pausePlacement: "center",
            theme,
            quality:[
              {
                name: "FHD",
                url:state.FHDVideoUrl
              },
              {
                name: "HD",
                url:state.HDVideoUrl
              },
              {
                name: "SD",
                url:state.SDVideoUrl
              }
            ],
            isProgressFloat:false,
            isShowScreenshot:false,
          }}
        />
      </div>
      {/* <div className="videoTitle">
        <h2>{state.title}</h2>
        <div className="videoInfos">
          <LazyLoad>
              <img src={replaceImgUrl(state.headImg)} />
          </LazyLoad>
          <p className="name">{state.author}</p>
          <div className="tagList">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div> */}
    </PlayerBox>
  );
}
export default PlayerPage;