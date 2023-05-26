
import styled from 'styled-components';
export const PlayerBox = styled.div`
  width: 854px;
  height:480px;
  background:#000;
`
export const CenterVideo = styled.div`
  width: 100%;
  margin-top:10px;
  .List{
    // display:flex;
    // justify-content: flex-start;
    margin-bottom: 10px;
    overflow: hidden;  *zoom: 1;
    .leftImg{
      position: relative;
      width: 178px;
      height: 100px;
      border: 1px solid #ddd;
      margin-right:20px;
      overflow:hidden;
      cursor:pointer;
      float:left;
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
      height: 100%;
      float:left;
      h3{
        font-size: 20px;
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
        margin-top:10px;
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
        padding-top: 10px;
        color: #999;
        font-size: 12px;
        display:block;
        overflow: hidden;  *zoom: 1;
        .lazyload-wrapper {
          line-height:0;
          float:left;
          img{
            width: 18px;
            height: 18px;
            border-radius:50%;
            margin-right:10px;
          }
        }
        span{
          float:left;
          display:block;
          line-height:20px;
        }
      }
    }
  }
`
