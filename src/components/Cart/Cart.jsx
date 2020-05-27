import React, { useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderContainer from "../CommonComponents/HeaderContainer";
import "../../index.css";
const CartContent = styled.article`
  display: flex;
  justify-content: space-between;
  width: 90%;
  min-width: 500px;
  margin-left: 3.5%;
  margin-top: 50px;
  padding: 30px 0 25px 0;
  .listContainer{
    width: 60%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
  }
  .total{
    width: 30%;
    min-width: 200px;
    display: flex;
    flex-direction: column;
  }
`;

export const InfoContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  height: 140px;
  min-width: 430px;
  margin-bottom: 50px;
  margin-right: 30px;
  button {
    background: #e5e5e5;
    width: 100px;
    outline: none;
    height: 50px;
    border: none;
    margin-right: 20px;
    padding: 10px;
    cursor: pointer;
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 60%;
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
    &:hover {
      color: black;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 20%;
  min-width: 140px;
  img {
    width: 100%;
    min-width: 140px;
  }
`;

function Cart(props) {
  const  {coinsInCart, coinToCart } = props;
  const [isShown, setIsShown] = useState(false);
  let coins  = coinsInCart.map(el=>{
    const{coin, value}= el;
   return (<InfoContainer>
      <ImageContainer>
        <img  src={`http://localhost:8000/image?id=${coin.idCoin}&side=reverse`}  alt="Coin" />
      </ImageContainer>
      <Description>
          <h4> {coin.coin_name}  </h4>
          <p> {coin.short_description} </p>
      </Description>
      <p>Total price: {value*coin.price}$ </p>
        <button onClick= {e=>{e.preventDefault(); let newCoinsInCart= coinsInCart.filter(item=>item.coin.coin_name!==coin.coin_name); coinToCart(newCoinsInCart)} }> Remove</button>
    </InfoContainer>)

  })
  
  return (
    <>
      <HeaderContainer headerText="GetCoin"/>   
      <CartContent>
        <div className='listContainer'>
          {coins}
        </div>
        <div className='total'>

        </div>
      </CartContent> 
    </>
  );
}
export default Cart;
