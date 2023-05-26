import styled from 'styled-components';
export const Main = styled.div`
  width:660px;
  margin-left: 30px;
  min-height: 100px;
  overflow:hidden;
  .loadMore{
    border: 1px solid rgba(229,229,229,1);
    width:100%;
    height:60px;
    line-height:60px;
    text-align:center;
    cursor:pointer;
    color: #404040;
    font-size: 18px;
    border-radius: 4px;
    transition: all .35s;
    margin-top:30px;
    margin-bottom:30px;
    :hover{
      color: #428ace;
      border: 1px solid #428ace;
    }
  }
`
export const List = styled.div`
  width: 100%;
  min-height: 100px;
  
  .list{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 0;
    border-bottom: 1px solid #e8e8e8;
    .leftImg{
      width: 178px;
      height: 100px;
      margin-right: 16px;
      .lazy-load-image-background{
        background-position:center;
      }
      img{
        width:178px;
        transition: all .2s;
      }
    }
    .rightContent{
      width:100%;
      .title{
        font-size: 20px;
        line-height: 1.3;
        margin-bottom: 4px;
        font-weight: 700;
        max-height: 52px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        word-break: break-all;
        text-align:left;
        margin-top: 0px;
        color:#222;
      }
      .video-from{
        font-size: 0;
        margin-top: 10px;
        text-align:left;
        line-height:18px;
        .headImg{
          display: inline-block;
          color: #fff;
          margin-right: 2px;
          width: 18px;
          height: 18px;
          line-height: 18px;
          text-align: center;
          font-size: 12px;
          border-radius: 50%;
          background-color: #eee;
          overflow: hidden;
          vertical-align: middle;
          img{
            width:100%;
          }
        }
        .mediaName{
          color: #777;
          font-size: 14px;
          display: inline-block;
          vertical-align: middle;
          margin-left: 4px;
          // position:relative;
          em{
            display: inline-block;
            width: 20px;
            height: 19px;
            background: url(//static01.pomoho.com/img/www/2017new/youzhiicon.png) no-repeat;
            vertical-align: middle;
            -webkit-transform: scale(0.8);
            transform: scale(0.8);
            margin-left: 0;
            position: relative;
            top: -1px;
          }
        }
      }
    }
  }
`