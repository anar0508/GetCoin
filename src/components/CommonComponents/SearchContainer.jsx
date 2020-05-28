import React from "react";
import { bindActionCreators } from "redux";
import Search from "./Search";
import { connect } from "react-redux";
import {
  searchHandling,
  toggleAdvancedSearch,
  gettingAdvancedSearchInfo,
} from "../../store/homepage/actions";

function SearchContainer(props) {
  const {
    advancedSearch,
    submitSearch,
    toggleAdvanced,
    getAdvancedInfo,
  } = props;
  return (
    <Search
      submitSearch={submitSearch}
      toggleAdvanced={toggleAdvanced}
      getAdvancedInfo={getAdvancedInfo}
      advancedSearch={advancedSearch}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    advancedSearch: state.homepage.advancedSearch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitSearch: bindActionCreators(searchHandling, dispatch),
    toggleAdvanced: bindActionCreators(toggleAdvancedSearch, dispatch),
    getAdvancedInfo: bindActionCreators(gettingAdvancedSearchInfo, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
