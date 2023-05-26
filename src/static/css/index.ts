import styled from 'styled-components';
export const ContentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 40,
  lineHeight: '40px',
  backgroundColor: '#FFF',
  width:1190,
  display: 'flex',
  justifyContent:'flex-start' ,
  marginLeft:'auto',
  marginRight:'auto',
  marginTop:16,
  marginBottom:0,
};
export const footerStyle: React.CSSProperties = {
  // textAlign: 'center',
  color: '#fff',
  marginTop:'50px',
  borderTop: '1px solid #ff4a45',
  padding:0,
};

export const FooterPadding = styled.div`
  
  .footerTop{
    padding: 15px 10px 15px;
    background: '#f4f5f6',
    display:block;
    margin-right:24px;
    
    a{
      margin-right:24px;
      height: 34px;
      color:#777;
      line-height: 34px;
    }
  }
  .footerBottom{
    text-align: center;
    background: #222;
    a{
      margin-right:24px;
      height: 34px;
      line-height: 34px;
      color: #ddd;
    }
  }
`
export const Main = styled.div`
  
`
export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  color: '#fff';
  height: 34px;
  line-height: 34px;
  background:#222;
  color:#fff;
  padding:0 0 0 15px;
  .title{
    cursor:pointer;
  }
  .logo{
    display: inline-block;
    width: 130px;
    height: 32px;
    background: url(//static01.pomoho.com/img/www/2017new/bmh_nav_logo.jpg) no-repeat 0 0;
    position: absolute;
    top: 11px;
  }
`
export const HeaderDivPlay = styled.div`
  background:#fff;
  width:100%;
  height: 55px;
  border-bottom: 1px solid #eee;
  .headerBox{
    width: 1280px;
    height:100%;
    margin: 0 auto;
    min-width: 1024px;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    .logo{
      display: block;
      width: 130px;
      height: 32px;
      background: url(//static01.pomoho.com/img/www/2017new/bmh_nav_logo.jpg) center center no-repeat;
    }
    .menu{
      display: flex;
      justify-content: flex-start;
      list-style: none;
      li{
        display: inline-block;
        margin-left: 20px;
        height: 55px;
        line-height:55px;
        vertical-align: top;
        cursor:pointer;
        transition: all .3s;
        :hover{
          color: #406599;
        }
      }
    }
  }
  
`
export const RightDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  color: '#fff';
  .upload{
    padding:0 10px;
    border-right:1px solid #fff;
    border-left:1px solid #fff;
    transition: all .3s;
    a{
      text-decoration：none
      display:block;
      color: '#fff';
    }
    :hover{
      background:#f0414a;
      color: '#fff';
    }
  }
  .download{
    padding:0 10px;
    border-right:1px solid #fff;
    cursor:pointer;
    transition: all .3s;
    a{
      text-decoration：none
      display:block;
      color: '#fff';
    }
    :hover{
      background:#f0414a;
      color: '#fff';
    }
  }
`
export const LeftBox = styled.div`
// display: flex;
// justify-content: flex-start;
`