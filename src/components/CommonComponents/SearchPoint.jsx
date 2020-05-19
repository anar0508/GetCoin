import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../index.css";

const InfoContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 45%;
  height: 135px;
  min-width: 300px;
  margin-bottom: 15px
`;

const Description = styled.div`
display: flex;
  flex-direction: column;
  width: 70%;
  min-width: 150px;
  padding-left:5px;
`;

const Name = styled.h4`
 color:#833AE0;
 padding: 10px 0;
`;
const ShortDescription = styled.p`
font-size: 12px;
padding: 10px 0;
`;


const Reverse = styled.img`
  width: 100%;
  min-width: 140px;

`;
const Obverse = styled.img`
  width: 100%;
  min-width: 140px;

`;
const ImageContainer = styled.div`
  width: 25%;
  min-width: 140px;
`;

function SearchPoint(props) {
  const { key, coin, getCoin } = props;
  const [isShown, setIsShown] = useState(false);
  let path=`/coin/${coin.idCoin}`
  return (
      <InfoContainer>
        <ImageContainer> 
        {!isShown && <Reverse onMouseEnter={() => setIsShown(true)} src={`http://localhost:8000/image?id=${coin.idCoin}&side=reverse`} alt="Coin"/> }
         {isShown && <Obverse onMouseLeave={() => setIsShown(false)} src={`http://localhost:8000/image?id=${coin.idCoin}&side=obverse`} alt="Coin"/>}
         </ImageContainer> 
         <Description>
         <Link to={path} onClick={()=>{getCoin(coin.idCoin)}}>  <Name> {coin.coin_name}</Name> </Link> 
            <ShortDescription> {coin.short_description} </ShortDescription>
         </Description>
      </InfoContainer>
  );
}
export default SearchPoint;
