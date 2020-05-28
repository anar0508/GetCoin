import React, { useState } from "react";
import { Link } from "react-router-dom";
import eye from "../../img/eye.svg";
import "../../index.css";
import {
  InfoContainer,
  ImageContainer,
  Description,
} from "./Styles/StyleSearchPoint";

function SearchPoint(props) {
  const { coin, getCoin, isAdmin, deleteCoin, editCoin, token } = props;
  const [isShown, setIsShown] = useState(false);
  let path = `/coin/${coin.idCoin}`;
  return (
    <InfoContainer>
      <ImageContainer>
        {!isShown && (
          <img
            onMouseEnter={() => setIsShown(true)}
            src={`/api/image?id=${coin.idCoin}&side=reverse`}
            alt="Coin"
          />
        )}
        {isShown && (
          <img
            onMouseLeave={() => setIsShown(false)}
            src={`/api/image?id=${coin.idCoin}&side=obverse`}
            alt="Coin"
          />
        )}
      </ImageContainer>
      <Description>
        <Link to={path} onClick={() => getCoin(coin.idCoin)}>
          <h4>
            {coin.coin_name} {isAdmin && <img src={eye} alt="eye" />}
            {isAdmin && <span> {coin.popularity} </span>}
          </h4>
        </Link>
        <p> {coin.short_description} </p>
        {chooseInterface(
          isAdmin,
          editCoin,
          coin,
          deleteCoin,
          token,
          path,
          getCoin
        )}
      </Description>
    </InfoContainer>
  );
}
export default SearchPoint;

function chooseInterface(
  isAdmin,
  editCoin,
  coin,
  deleteCoin,
  token,
  path,
  getCoin
) {
  if (isAdmin) {
    return adminInterface(editCoin, coin, deleteCoin);
  } else if (!token) {
    return unLoggedInterface();
  } else if (!!coin.purchaseDate) {
    return myCoinsInterface(coin);
  } else if (!coin.view_date) {
    return loggedInterface(path, getCoin, coin);
  } else return historyInterface(coin);
}

function historyInterface(coin) {
  return <p> Viewed on {coin.view_date.slice(0, 19).replace("T", " ")} </p>;
}

function loggedInterface(path, getCoin, coin) {
  return (
    <Link
      to={path}
      onClick={() => {
        getCoin(coin.idCoin);
      }}
    >
      More...
    </Link>
  );
}

function unLoggedInterface() {
  return (
    <p>
      <Link to="/register">Register</Link> and
      <Link to="/login"> Login</Link> to shop
    </p>
  );
}

function adminInterface(editCoin, coin, deleteCoin) {
  return (
    <div>
      <button
        onClick={() => {
          editCoin(true, coin);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          deleteCoin(coin.idCoin);
        }}
      >
        Delete
      </button>
    </div>
  );
}

function myCoinsInterface(coin) {
  return (
    <p>
      {" "}
      {coin.purchased_quantity} coins were purchased on{" "}
      {coin.purchaseDate.slice(0, 19).replace("T", " ")}{" "}
    </p>
  );
}
