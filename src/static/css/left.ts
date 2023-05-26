import styled from 'styled-components';
export const LeftList = styled.div`
  padding:0 0 0 15px;
  width: 130px;
  text-align: center;
  .logo{
    margin-bottom: 12px;
    display:block;
    width:100%;
  }
  .listBox{
    .name{
      color:#444;
      font-size:16px;
      cursor:pointer;
      transition: all .2s;
      display:block;
      :hover{
        color: #f0414a;
      }
    }
    
  }

`
export const NameChose = styled.div`
  color:#f0414a;
`
