
/* src\views\home\index.tsx */
import { FC, useEffect,useState,useRef, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RightVideo } from "../../static/css/video";
import LazyLoad from "react-lazyload";
import { replaceImgUrl } from "../../static/js/common";
import { getplayVideoList } from "../../http/api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import loadingImg from '../../static/image/loading.png'
import useUrlState from '@ahooksjs/use-url-state';
import { useSearchParams } from "react-router-dom";
function RightVideoPage() {
    const [videoList, setvideoList] = useState<any>([]);
    const [state, setState] = useUrlState();
    let [navigate] = useSearchParams();
    useEffect(()=>{
      getPlayVideoListCenter()
    },[])
    async function getPlayVideoListCenter(){
      let flvid = Number(navigate.get("videoid"));
      let res:any = await getplayVideoList(flvid,'mvNor');
      console.log("右侧数据",res.retStr)
      setvideoList(res.retStr);
    }
    const clickVideo = (videoId:number) => {
      state.videoid = videoId;
      setState({ videoid: Number(videoId)})
    }
    return ( 
      <RightVideo>
        {videoList && videoList.map((item: { videoid: number; videoimgurl: string; time: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; videoname: string; apppic: string; appname: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; },index: Key | null | undefined) => (
          <div className="List" key={index}>
            <div className="leftImg" onClick={() => clickVideo(item.videoid)}>
              <LazyLoadImage src={replaceImgUrl(item.videoimgurl)} placeholderSrc={loadingImg} width={168} height={94}></LazyLoadImage>
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
        
        
      </RightVideo>
    );
}
export default RightVideoPage;