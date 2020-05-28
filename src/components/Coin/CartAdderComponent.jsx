import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import { CartAdder } from "./Styles/StylesCoinPage";
import { Adder } from "./Styles/StylesCartAdderComponent";

function CartAdderComponent(props) {
  const { coin, maxValue, price, coinToCart, coinsInCart } = props;
  const [value, handleChange] = useState(0);
  const [showOptions, handleShow] = useState(false);
  return (
    <CartAdder>
      <h3>To cart</h3>
      <Adder>
        <div>
          <button
            onClick={(e) => {
              decrementHandler(e, value, handleChange);
            }}
          ></button>
          <input
            type="number"
            placeholder="0"
            value={value}
            min={0}
            name="adder"
            id="adder"
            onChange={(e) => {
              inputChangeHandler(e, maxValue, handleChange);
            }}
          />
          <button
            onClick={(e) => {
              incrementHandler(e, value, maxValue, handleChange);
            }}
            className="plus"
          ></button>
        </div>
      </Adder>
      <p>Total price: ${Number(price) * value}</p>
      <button
        onClick={() => {
          addingToCart(
            handleShow,
            coinsInCart,
            coin,
            value,
            coinToCart,
            handleChange
          );
        }}
      >
        Add
      </button>
      {showOptions && (
        <article>
          <p>
            Coin is added to your card. Would you like to continue shop or
            proceed to cart?
          </p>
          <div >
            <Link
              to="/"
              onClick={() => {
                handleShow(false);
              }}
            >
              Shopping
            </Link>
            <Link
              to="/Cart"
              onClick={() => {
                handleShow(false);
              }}
            >
              Cart
            </Link>
          </div>
        </article>
      )}
    </CartAdder>
  );
}
export default CartAdderComponent;

function addingToCart(
  handleShow,
  coinsInCart,
  coin,
  value,
  coinToCart,
  handleChange
) {
  handleShow(true);
  let checker = coinsInCart.find((el) => el.coin.idCoin === coin.idCoin);
  if (!checker) {
    coinsInCart.push({ coin, value });
    coinToCart(coinsInCart);
    localStorage.setItem("cart", JSON.stringify(coinsInCart));
    handleChange(0);
  } else {
    let newCoinsCart = coinsInCart.map((el) => {
      if (el.coin.idCoin === coin.idCoin) {
        el.value += value;
        return el;
      } else return el;
    });
    coinToCart(newCoinsCart);
    localStorage.setItem("cart", JSON.stringify(newCoinsCart));
    handleChange(0);
  }
}

function incrementHandler(e, value, maxValue, handleChange) {
  e.preventDefault();
  if (!(value + 1 > maxValue)) {
    let newValue = value + 1;
    handleChange(newValue);
  } else {
    handleChange(maxValue);
  }
}

function inputChangeHandler(e, maxValue, handleChange) {
  let newValue = Number(e.target.value);
  if (newValue > maxValue) {
    e.preventDefault();
    handleChange(maxValue);
  } else if (newValue < 0) {
    handleChange(0);
  } else {
      handleChange(newValue);
  }
}

function decrementHandler(e, value, handleChange) {
  e.preventDefault();
  if (!(value - 1 < 0)) {
    let newValue = value - 1;
    handleChange(newValue);
  } else {
    handleChange(0);
  }
}
