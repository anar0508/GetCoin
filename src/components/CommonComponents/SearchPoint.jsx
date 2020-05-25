import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import { InfoContainer, ImageContainer, Description } from "./Styles/StyleSearchPoint";

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
            src={`http://localhost:8000/image?id=${coin.idCoin}&side=reverse`}
            alt="Coin"
          />
        )}
        {isShown && (
          <img
            onMouseLeave={() => setIsShown(false)}
            src={`http://localhost:8000/image?id=${coin.idCoin}&side=obverse`}
            alt="Coin"
          />
        )}
      </ImageContainer>
      <Description>
        <Link to={path} onClick={() => getCoin(coin.idCoin)}> <h4> {coin.coin_name}</h4> </Link>
        <p> {coin.short_description} </p>
        {isAdmin 
        ? (<div>
            <button onClick={() => {editCoin(true, coin);}}>
              Edit
            </button>
            <button onClick={() => { deleteCoin(coin.idCoin); }}>
              Delete
            </button>
          </div>) 
        : !token 
        ? (<p>
            <Link to="/register">Register</Link> and 
            <Link to="/login"> Login</Link> to shop
          </p>) 
        : !coin.view_date
          ?(<Link to={path} onClick={() => {getCoin(coin.idCoin);}}> More...</Link> )
          : <p> Viewed on {coin.view_date.slice(0, 19).replace('T', ' ')} </p> }
      </Description>
    </InfoContainer>
  );
}
export default SearchPoint;
