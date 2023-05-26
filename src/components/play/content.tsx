
/* src\views\home\index.tsx */
import { FC, useEffect,useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CenterVideo } from "../../static/css/center";
import { ReducerState } from "../../store";
import LazyLoad from "react-lazyload";
import { replaceImgUrl } from "../../static/js/common";
import { getplayVideoList } from "../../http/api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import loadingImg from '../../static/image/loading.png'
import { useSearchParams } from "react-router-dom";
import useUrlState from "@ahooksjs/use-url-state";

function CenterVideoPage() {
    //设置视频接收参数
    const [videoList, setvideoList] = useState<any>([]);
    const [state, setState] = useUrlState();
    let [navigate] = useSearchParams();
    useEffect(()=>{
      getPlayVideoListCenter();
    },[])
    async function getPlayVideoListCenter(){
      let flvid = Number(navigate.get("videoid"));
      let res:any = await getplayVideoList(flvid,'mvLs');
      console.log("res",res);
      setvideoList(res.retStr);
    }
    const clickVideo = (videoId:number) => {
      state.videoid = videoId;
      setState({ videoid: Number(videoId)})
    }
    return ( 
      <CenterVideo>
        {videoList && videoList.map((item: any,index: any) => (
          <div className="List" key={index}>
            <div className="leftImg"  onClick={() => clickVideo(item.videoid)}>
              <LazyLoadImage src={replaceImgUrl(item.videoimgurl)} placeholderSrc={loadingImg} width={178} height={100}></LazyLoadImage>
              <span>{item.time}</span>
            </div>
            <div className="rightText">
              <h3 onClick={() => clickVideo(item.videoid)}>{decodeURI(item.videoname)}</h3>
              <a className="Person">
                <LazyLoad>
                  <img src={replaceImgUrl(item.apppic)} />
                </LazyLoad>
                <span>{item.appname}</span>
              </a>
            </div>
          </div>
        ))}
        
        
      </CenterVideo>
    );
}
export default CenterVideoPage;