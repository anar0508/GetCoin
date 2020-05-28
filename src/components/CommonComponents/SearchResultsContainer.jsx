import React from "react";
import SearchResults from "./SearchResults";
import { connect } from "react-redux";

function SearchResultsContainer(props) {
  const { coins } = props;
  return <SearchResults coins={coins} />;
}

const mapStateToProps = (state) => {
  return {
    coins: state.homepage.coins,
  };
};

export default connect(mapStateToProps)(SearchResultsContainer);
