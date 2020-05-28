import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import styled from "styled-components";
import { CartAdder } from "./StylesCoinPage";

const Adder = styled.form`
  display: flex;
  flex-direction: raw;
  width: 100%;
  padding: 30px;
  justify-content: space-evenly;
  input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  div {
    border: 2px solid #ddd;
    display: inline-flex;
  }

  div,
  div * {
    box-sizing: border-box;
  }

  button {
    outline: none;
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    margin: 0;
    position: relative;
  }

  button:before,
  button:after {
    display: inline-block;
    position: absolute;
    content: "";
    width: 1rem;
    height: 2px;
    background-color: #212121;
    transform: translate(-50%, -50%);
  }
  button.plus:after {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  input[type="number"] {
    font-family: sans-serif;
    max-width: 5rem;
    padding: 0.5rem;
    border: solid #ddd;
    border-width: 0 2px;
    font-size: 2rem;
    height: 3rem;
    font-weight: bold;
    text-align: center;
  }
`;

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
    {
      handleChange(newValue);
    }
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
