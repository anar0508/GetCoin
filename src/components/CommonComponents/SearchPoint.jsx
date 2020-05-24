import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../index.css";

const InfoContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 45%;
  height: 140px;
  min-width: 430px;
  margin-bottom: 20px;
  margin-right: 30px;
`;

const Description = styled.div`
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

const ImageContainer = styled.div`
  width: 25%;
  min-width: 140px;
  img {
    width: 100%;
    min-width: 140px;
  }
`;

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
        <Link
          to={path}
          onClick={() => {
            getCoin(coin.idCoin);
          }}
        >
          {" "}
          <h4> {coin.coin_name}</h4>{" "}
        </Link>
        <p> {coin.short_description} </p>
        {isAdmin ? (
          <div>
            <button
              onClick={() => {
                editCoin(true, coin);
              }}
            >
              {" "}
              Edit{" "}
            </button>
            <button
              onClick={() => {
                deleteCoin(coin.idCoin);
              }}
            >
              {" "}
              Delete{" "}
            </button>
          </div>
        ) : !token ? (
          <p>
            {" "}
            <Link to="/register">Register</Link> and{" "}
            <Link to="/login"> Login</Link> to shop{" "}
          </p>
        ) : (
          <Link
          to={path}
          onClick={() => {
            getCoin(coin.idCoin);
          }}
        >
          More...
        </Link>
        )}
      </Description>
    </InfoContainer>
  );
}
export default SearchPoint;
