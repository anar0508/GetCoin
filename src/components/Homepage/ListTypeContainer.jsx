import React from "react";
import { bindActionCreators } from "redux";
import ListType from "./ListType";
import { connect } from "react-redux";
import { searchHandling } from "../../store/homepage/actions";

function ListTypeContainer(props) {
  const { listName, submitSearch } = props;
  return <ListType listName={listName} submitSearch={submitSearch} />;
}

const mapStateToProps = (state) => {
  return {
    advancedSearch: state.homepage.advancedSearch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitSearch: bindActionCreators(searchHandling, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTypeContainer);
