import fetchJsonp from 'fetch-jsonp';
import http from './index';
import { getTimestampByDays, getTimestampByHours } from '../static/js/common';
import GetJsonp from './jsonp';
/**
 * 获取频道列表
 */
function getChannelList(){
  return http("get",'/api/nav.json');
}
/**
 * 获取首页视频列表
 * @param _obj 
 * @returns 
 */
function getVideoPageList(_obj: any){
  let params:any = _obj;
  let headers:any = {
    "ContentType": "application/x-www-form-urlencoded",
  }
  return http("post",'api/cds/getVideoPageList',params,headers);
  
}
/**
 * 获取首页top50
 * @param callback 
 */
function getTop50(callback: (data:any) => void){
  let options = {
    jsonpCallback:'jsoncallback',//回调参数的名称
  }
  fetchJsonp(`https://interface.video.pomoho.com/index.ashx?dataType=pc_partners&pageIndex=1&pageSize=50`,options)
  .then(response => response.json())
  .then( data => {
    callback(data);
  })
}
/**
 * 获取播放页视频信息
 * @param videoId 
 * @returns 
 */
function getVideoInfos(videoId: string){
  return http('get','https://push-common.pomoho.com:8081/api/video/getVideoInfo?videoId='+videoId)
}
function getplayVideoList(videoId: number,sence:string){
  return http('get',`https://t-interface.pomoho.com/api/video/getAliRecVideo?videoId=${videoId}&sence=${sence}`)
}
export {
  getChannelList,
  getVideoPageList,
  getTop50,
  getVideoInfos,
  getplayVideoList
}

