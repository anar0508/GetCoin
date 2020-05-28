import React from "react";
import { bindActionCreators } from "redux";
import Header from "./Header";
import { connect } from "react-redux";
import { loggingOut } from "../../store/login/actions";
import { resetAdvancedSearchParms } from "../../store/homepage/adSearch/actions";
import { getSearchResult } from "../../store/homepage/actions";

function HeaderContainer(props) {
  const {
    token,
    logOut,
    headerText,
    name,
    isAdmin,
    resetCoinsSearch,
    resetAdvancedSearch,
  } = props;
  return (
    <Header
      token={token}
      logOut={logOut}
      headerText={headerText}
      resetCoinsSearch={resetCoinsSearch}
      resetAdvancedSearch={resetAdvancedSearch}
      name={name}
      isAdmin={isAdmin}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.login.token,
    name: state.login.logName,
    isAdmin: state.login.admin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: bindActionCreators(loggingOut, dispatch),
    resetAdvancedSearch: bindActionCreators(resetAdvancedSearchParms, dispatch),
    resetCoinsSearch: bindActionCreators(getSearchResult, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
