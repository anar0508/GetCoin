import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import CartAdderComponentContainer from './CartAdderComponentContainer';
import { useLocation } from 'react-router-dom'
import "../../index.css";
import HeaderContainer from '../CommonComponents/HeaderContainer';
import { P, Article, ImageContainer, Reverse, Obverse, DescriptionContainer, SimilarCoins, CoinInfo } from "./Styles/StylesCoinPage";

function Coin(props) {
  const { coin, coins, submitSearch, getCoin} = props;
  let location = useLocation();
  let id = (location.pathname).split('coin/')[1];
  useEffect(()=>{getCoin(Number(id));}, [])
  useEffect(()=>{submitSearch('same');}, [coin])
  let newCoins= coins.map(el=>{let path = `/coin/${el.idCoin}`; return  <div key= {el.idCoin}> <Link to={path} onClick={() => getCoin(el.idCoin)}> 
  <h3>{el.coin_name}</h3> 
  <img src={`/api/image?id=${el.idCoin}&side=reverse`}
  alt="Coin"
/>  </Link> </div>})


  let paragraphs = coin.description.split("/p");
  let idAdder=''
  paragraphs = paragraphs.map((line) => {
    idAdder+='k';
    return <P key = {coin.idCoin+idAdder}>{line}</P>;
  });

  return (
    <main>
      <HeaderContainer headerText ='GetCoin'/>
    <Article>
      <CoinInfo>
        <ImageContainer>
        <Reverse
          src={`/api/image?id=${coin.idCoin}&side=reverse`}
          alt="Coin"
        />
        <Obverse
          src={`/api/image?id=${coin.idCoin}&side=obverse`}
          alt="Coin"
        />
      </ImageContainer>
      <DescriptionContainer>
        <h2>{coin.coin_name}</h2>
        {paragraphs}
        <table>
          <tbody>
          <tr>
            <td>Issuing country</td>
            <td>{coin.country}</td>
          </tr>

          <tr>
            <td>Composition </td>
            <td>{coin.сomposition}</td>
          </tr>

          <tr>
            <td>Quality</td>
            <td>{coin.quality}</td>
          </tr>

          <tr>
            <td>Denomination</td>
            <td>{`${coin.denomination} ${coin.den_currency} `}</td>
          </tr>

          <tr>
            <td>Year</td>
            <td>{coin.issuance_year}</td>
          </tr>

          <tr>
            <td>Weight</td>
            <td>{coin.weight}</td>
          </tr>

          <tr>
            <td>Price</td>
            <td>{`${coin.price} $ `}</td>
          </tr>
          </tbody>
        </table>
        <P style={{color: coin.quantity>0? 'green': 'red'}}> Available: {coin.quantity} </P>

        <CartAdderComponentContainer coin={coin} maxValue={coin.quantity} price={coin.price}/>
        <Link to ={'/coins'}> {'Back to list'} </Link>
      </DescriptionContainer>
      </CoinInfo>
      <SimilarCoins>
        <h2>Similar coins</h2>
        {newCoins}
      </SimilarCoins>  
    </Article>
    </main>
  );
}
export default Coin;
