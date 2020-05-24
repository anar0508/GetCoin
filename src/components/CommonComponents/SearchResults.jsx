import React from "react";
import SearchPointContainer from "./SearchPointContainer";
import styled from "styled-components";
import Paginator from "./Paginator";
import "../../index.css";

const ResultsContainer = styled.section`
  display: flex;
  flex-direction: raw;
  flex-wrap: wrap;
  width: 90%;
  min-width: 830px;
  margin-left: 3.5%;
  margin-top: 20px;
  justify-content: space-between;
`;

function SearchResults(props) {
  const { coins } = props;
    let newCoins = coins.map((coin) => {
        return <SearchPointContainer key ={coin.id} coin={coin} />;
      })
    
  return <ResultsContainer> 
    {newCoins.length !== 0 ? (
            <Paginator rowElems={newCoins} />
          ) :  (
            <h2>Not Found</h2>
          )}
   </ResultsContainer>;
}
export default SearchResults;
