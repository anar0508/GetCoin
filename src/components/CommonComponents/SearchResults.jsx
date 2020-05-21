import React from "react";
import SearchPointContainer from "./SearchPointContainer";
import styled from "styled-components";
import "../../index.css";

const ResultsContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 80%;
  height:450px;
  min-width: 630px;
  margin-left: 3.5%;
  margin-top: 30px;
`;

function SearchResults(props) {
  const { coins } = props;
    let newCoins = coins.map((coin) => {
        return <SearchPointContainer key ={coin.id} coin={coin} />;
      })
    
  return <ResultsContainer> {newCoins} </ResultsContainer>;
}
export default SearchResults;
