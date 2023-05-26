
import styled from 'styled-components';
export const PlayerBox = styled.div`
  .JoLPlayer{
    width: 854px;
    height:480px;
    .JoL-player-container{
      height:100%;
    }
    .videoTitle{
      margin-top:10px;
      h2{
        font-size:23px;
        color:#222;
        text-align:left;
        padding-left:15px;
      }
      .videoInfos{
  
      }
    }
  }

`
export const RightVideo = styled.div`
  width: 402px;
  margin-left:20px;
  .List{
    display:flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .leftImg{
      position: relative;
      width: 168px;
      height: 94px;
      border: 1px solid #ddd;
      margin-right:10px;
      overflow:hidden;
      cursor:pointer;
      .lazyload-wrapper {
        img{
          width: 100%;
          height: 100%;
          transition: all .2s;
          :hover{
            transform: scale(1.1,1.1);
          }
        }
        
      }
      span{
        display:block;
        width:40px;
        height:20px;
        line-height:20px;
        position: absolute;
        right: 0;
        bottom: 0;
        border-radius: 6px;
        font-style: normal;
        color:#fff;
      }
      
    }
    .rightText{
      width:224px;
      height: 100%;
      h3{
        font-size: 15px;
        font-weight: normal;
        line-height: 20px;
        max-height: 40px;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-transition: color .2s;
        -o-transition: color .2s;
        transition: color .2s;
        margin: 0;
        padding: 0;
        text-align:left;
        cursor:pointer;
        a{
          color:#333;
          display:block;
          :hover{
            color: #428ace;
          }
        } 
      }
      .Person{
        padding-top: 6px;
        color: #999;
        font-size: 12px
        display:block;
        display:flex;
        justify-content: flex-start;
        .lazyload-wrapper {
          line-height:0;
          img{
            width: 18px;
            height: 18px;
            border-radius:50%;
            margin-right:10px;
          }
        }
        span{
          line-height:20px;
        }
      }
    }
  }
`
