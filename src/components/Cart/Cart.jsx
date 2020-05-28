import React from "react";
import HeaderContainer from "../CommonComponents/HeaderContainer";
import "../../index.css";
import { InfoContainer, ImageContainer, Description, CartContent } from "./Styles/StylesCart";

function purchase(coinsInCart, coinToCart) {
  return async (e) => {
    e.preventDefault();
    let quantityAndId = coinsInCart.map((el) => {
      return {
        id: el.coin.idCoin,
        quantity: el.value,
      };
    });
    coinToCart([]);
    localStorage.removeItem("cart");
    await fetch("/api/purchase", {
      method: "POST",
      body: JSON.stringify({
        token: localStorage.getItem("token"),
        date: new Date().toJSON().slice(0, 19).replace("T", " "),
        coins: quantityAndId,
      }),
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:8000",
        "Content-Type": "application/json",
      },
    });

  };
}

function createListOftheCoinsInCart(coinsInCart, coinToCart) {
  return coinsInCart.map((el) => {
    let coin = el.coin; 
    let value  = el.value;
    return (
      <InfoContainer>
        <ImageContainer>
          <img src={`/api/image?id=${coin.idCoin}&side=reverse`} alt="Coin" />
        </ImageContainer>
        <Description>
          <h4> {coin.coin_name} </h4>
          <p> {coin.short_description} </p>
          <p style={{ color: coin.quantity > 0 ? "green" : "red" }}>
            Available {coin.quantity}
          </p>
        </Description>
        <div>
          <p>Quantity: {value}</p>
          <p>Total price: {value * coin.price}$ </p>
        </div>

        <button
          onClick={(e) => {
            removeFromCart(e, coinsInCart, coin, coinToCart);
          }}
        >
          Remove
        </button>
      </InfoContainer>
    );
  });
}

function calculateSum(coinsInCart) {
  return coinsInCart.reduce((acc, curr) => {
    return acc + curr.coin.price * curr.value;
  }, 0);
}

function removeFromCart(e, coinsInCart, coin, coinToCart) {
  e.preventDefault();
  let newCoinsInCart = 
    coinsInCart.filter((item) => item.coin.coin_name !== coin.coin_name);
  coinToCart(newCoinsInCart);
  localStorage.setItem("cart", JSON.stringify(newCoinsInCart));
}

function Cart(props) {
  const { coinsInCart, coinToCart } = props;
  let coins = createListOftheCoinsInCart(coinsInCart, coinToCart);

  return (
    <>
      <HeaderContainer headerText="GetCoin" />
      
      {!coinsInCart?<p>Cart is empty </p>:<CartContent>
        <div className="listContainer">{coins}</div>
        <div className="total">
          <p>Total price: {calculateSum(coinsInCart)}$ </p>
          <button onClick={purchase(coinsInCart, coinToCart)}>BUY</button>
        </div>
      </CartContent>}
    </>
  );
}
export default Cart;


