import styled from 'styled-components';
export const Main = styled.div`
  width: 340px;
  // float: left;
  margin-left: 30px;
  .bannerList{
    .bannerBox{
      display:block;
      margin-bottom: 12px;
      width: 240px;
      height: 80px;
      background: #f5f5f5;
      cursor: pointer;
      .banner-item{
        width:100%;
        height:100%;
        display:block;
      }
    }
    
  }
  .friends{
    h3{
      font-size: 18px;
      color: #000;
      font-weight: bold;
      margin: 20px 0;
      text-align:left;
    }
    .bannerBox{
      width: 240px;
      height: 80px;
      margin-bottom: 8px;
      display: block;
      cursor: pointer;
    }
    .banner-item{
      width:100%;
      height:100%;
      display:block;
    }
  }
  .top50{
    h3{
      font-size: 18px;
      color: #000;
      font-weight: bold;
      margin: 20px 0;
      text-align:left;
    }
    .mediaBox{
      margin-bottom: 14px;
      a{
        display:block;
        display:flex;
        justify-content: flex-start;
        .avatar{
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          background-color: #f5f5f5;
          img{
            width: 100%;
            height: 100%;
            transition: all .25s;
          }
          :hover img{
            transform: scale(1.15);
          }
        }
        .name{
          margin-left: 15px;
          padding-right: 10px;
          line-height: 50px;
          font-size: 15px;
          color: #222;
          .indent-tag1{
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