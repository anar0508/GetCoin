import React from "react";
import { bindActionCreators } from "redux";
import HomePage from './HomePage';
import { connect } from "react-redux";
import { loggingOut, downloading } from "../../store/menu/actions";

function HomePageContainer(props) {
  const { token, logged, logOut } = props;
  return (
    <HomePage token={token} logOut={logOut} logged={logged}/>
  );
}

const mapStateToProps = (state) => {
    return {
        token:state.login.token,
        logged:state.login.logged
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: bindActionCreators(loggingOut, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)