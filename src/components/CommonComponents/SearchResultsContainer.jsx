import React from "react";
import { bindActionCreators } from "redux";
import SearchResults from './SearchResults';
import { connect } from "react-redux";
// import {} from "../../store/homepage/actions";

function SearchResultsContainer(props) {
  const { coins } = props;
  return (
    <SearchResults coins={coins}/>
  );
}

const mapStateToProps = (state) => {
    return {
      coins:state.homepage.coins
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // submitSearch: bindActionCreators(searchHandling, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer)