import React from "react";
import { bindActionCreators } from "redux";
import ListType from './ListType';
import { connect } from "react-redux";
import {searchHandling, toggleAdvancedSearch, gettingAdvancedSearchInfo} from "../../store/homepage/actions";

function ListTypeContainer(props) {
  const { listName, submitSearch, toggleAdvanced, getAdvancedInfo } = props;
  return (
    <ListType listName={listName} />
  );
}

const mapStateToProps = (state) => {
    return {
      advancedSearch:state.homepage.advancedSearch
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // submitSearch: bindActionCreators(searchHandling, dispatch),
    // toggleAdvanced: bindActionCreators(toggleAdvancedSearch, dispatch),
    // getAdvancedInfo: bindActionCreators(gettingAdvancedSearchInfo, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTypeContainer)