import styled from "styled-components";

const media = {
    desctop: `@media(min-width: 1000px)`
}

export const ContentWrap = styled.div`
  width: 100%;
  border: 1px solid green;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  
  ${media.desctop} {
    width: 1000px;
  }
  
  h3 {
    font-size: 10px;
    font-weight: bold;
    color: gray;
    margin-left: 14px;
    align-self: flex-start;
  }
  
  .boxWrap {
    width: 90%;
    display: flex;
    border: 1px solid blue;
    
    ${media.desctop} {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
    }
    
    .french1 {
      width: 25%;
      height: 85px;
      border-radius: 50%;
      background-color: gray;
      
      ${media.desctop} {
        width: 48%;
      }
    }
    
    .french2 {
      margin-left: 3px;
      width: 25%;
      height: 85px;
      border-radius: 50%;
      background-color: gray;
      
      ${media.desctop} {
        margin: 0;
        width: 48%;
      }
    }

    .french3 {
      margin-left: 3px;
      width: 25%;
      height: 85px;
      border-radius: 50%;
      background-color: gray;

      ${media.desctop} {
        margin: 0;
        width: 48%;
      } 
    }

    .french4 {
      margin-left: 3px;
      width: 25%;
      height: 85px;
      border-radius: 50%;
      background-color: gray;

      ${media.desctop} {
        margin: 0;
        width: 48%;
      }
    }
`;