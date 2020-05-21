import React from "react";
import CoinsListPage from './CoinsListPage';
import { connect } from "react-redux";


function CoinsListPageContainer(props) {
  const { advancedSearch} = props;
  return (
    <CoinsListPage advancedSearch={advancedSearch}/>
  );
}

const mapStateToProps = (state) => {
    return {
        advancedSearch:state.homepage.advancedSearch
    }
}


export default connect(mapStateToProps)(CoinsListPageContainer)