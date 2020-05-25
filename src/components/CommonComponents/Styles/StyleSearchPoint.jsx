import styled from "styled-components";
export const InfoContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 45%;
  height: 140px;
  min-width: 430px;
  margin-bottom: 20px;
  margin-right: 30px;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  min-width: 150px;
  padding-left: 5px;
  a {
    color: #833ae0;
  }
  p {
    font-size: 12px;
    padding: 10px 0;
  }
  h4 {
    color: #833ae0;
    padding: 10px 0;
    span{
      font-size: 12px;
      vertical-align:top;
      &:hover{
       color: rgba(0,0,0, 0.5)
      }
    }
    img{
      width: 15px;
      vertical-align:top;
    }
    &:hover {
      color: black;
    }
  }

  button {
    background: #e5e5e5;
    width: 120px;
    outline: none;
    border: none;
    margin-right: 20px;
    padding: 10px;
  }
`;
export const ImageContainer = styled.div`
  width: 25%;
  min-width: 140px;
  img {
    width: 100%;
    min-width: 140px;
  }
`;
