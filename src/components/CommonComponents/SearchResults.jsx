import React from "react";
import SearchPointContainer from "./SearchPointContainer";
import Paginator from "./Paginator";
import "../../index.css";
import { ResultsContainer } from "./Styles/StyleSearchResults";

function SearchResults(props) {
  const { coins } = props;
  let newCoins = coins.map((coin) => {
    return <SearchPointContainer key={coin.id} coin={coin} />;
  });

  return (
    <ResultsContainer>
      {newCoins.length !== 0 ? (
        <Paginator rowElems={newCoins} />
      ) : (
        <h2>Not Found</h2>
      )}
    </ResultsContainer>
  );
}
export default SearchResults;
