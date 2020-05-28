import styled from "styled-components";
export const Article = styled.article`
  width: 98%;
  margin: 1% auto;
  display: flex;
  min-width: 600px;
  margin-top: 24px;
  justify-content: space-between;
  align-items: center;
`;

export const CoinInfo = styled.article`
  width: 65%;
  display: flex;
  justify-content: space-around;
`;
export const ImageContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  align-content: space-between;
`;
export const Reverse = styled.img`
  width: 80%;
  display: block;
`;
export const Obverse = styled.img`
  width: 80%;
  display: block;
`;
export const DescriptionContainer = styled.div`
  width: 55%;
  background: rgba(196, 196, 196, 0.5);
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  align-content: space-between;
  a {
    margin-top: auto;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;
export const P = styled.p`
  font-size: 14px;
  margin-top: 15px;
`;

export const SimilarCoins = styled.section`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 560px;
  overflow: hidden;
  overflow-x: hidden;
  &:hover {
    overflow: scroll;
    overflow-x: hidden;
  }
  h3 {
    text-align: center;
  }
  h2 {
    text-align: center;
    color: #833ae0;
  }
  div {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: middle;
    a {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: middle;
    }
  }
  img {
    margin: 0 auto;
    width: 60%;
    min-width: 150px;
  }
`;

export const CartAdder = styled.section`
display: flex;
flex-direction:column;
width: 250px;
height: 340px;
h3{
  text-align: center;
}
p{
  align-self:center;
  font-size: 13px;
}
article{
border: 2px solid #e3e3e3;
padding: 10px;
margin: 10px;
div{
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  a{
    background: #833ae0;
  align-self:center;
    width: 45%;
    outline: none;
    border: none;
    padding: 10px;
    text-align: center;
    color: white;
    &:hover{
    background: rgba(131, 58, 224, 0.5);
  } 
  }
}
}

button{
  background: #833ae0;
  align-self:center;
    width: 120px;
    outline: none;
    border: none;
    padding: 10px;
    color: white;
    &:hover{
    background: rgba(131, 58, 224, 0.5);
  }
}
`;
