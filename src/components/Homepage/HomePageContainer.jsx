import React from "react";
import HomePage from "./HomePage";
import { connect } from "react-redux";

function HomePageContainer(props) {
  const { advancedSearch } = props;
  return <HomePage advancedSearch={advancedSearch} />;
}

const mapStateToProps = (state) => {
  return {
    advancedSearch: state.homepage.advancedSearch,
  };
};

export default connect(mapStateToProps)(HomePageContainer);
