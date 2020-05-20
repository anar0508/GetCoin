import React from "react";
import { bindActionCreators } from "redux";
import HomePage from './HomePage';
import { connect } from "react-redux";
import { loggingOut } from "../../store/login/actions";

function HomePageContainer(props) {
  const { token, logged, logOut, advancedSearch} = props;
  return (
    <HomePage token={token} logOut={logOut} logged={logged} advancedSearch={advancedSearch}/>
  );
}

const mapStateToProps = (state) => {
    return {
        token:state.login.token,
        logged:state.login.logged, 
        advancedSearch:state.homepage.advancedSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: bindActionCreators(loggingOut, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)