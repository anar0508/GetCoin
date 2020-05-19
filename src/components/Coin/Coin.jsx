import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../index.css";

const Article = styled.article`
  width: 90%;
  margin: 0 auto;
  display: flex;
  max-width: 920px;
  min-width: 600px;
  margin-top: 24px;
  align-content: space-between;
`;

const ImageContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  align-content: space-between;
`;

const Reverse = styled.img`
  width: 100%;
  display: block;
`;
const Obverse = styled.img`
  width: 100%;
  display: block;
`;

const DescriptionContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  align-content: space-between;
`;

function Coin(props) {
  const { coin } = props;
  useEffect(()=>{}, [coin])
  return (
    <Article>
        <ImageContainer>
            <Reverse src={`http://localhost:8000/image?id=${coin.idCoin}&side=reverse`} alt="Coin"/>
            <Obverse src={`http://localhost:8000/image?id=${coin.idCoin}&side=obverse`} alt="Coin"/>
        </ImageContainer>
        <DescriptionContainer>
            <h2>{coin.coin_name}</h2>
        </DescriptionContainer>
    </Article>
  );
}
export default Coin;
