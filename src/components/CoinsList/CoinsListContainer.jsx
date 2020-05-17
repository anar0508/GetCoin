import React from "react";
import { bindActionCreators } from "redux";
import CoinsList from './CoinsList';
import { connect } from "react-redux";
import { loggingOut } from "../../store/homepage/actions";

function CoinsListContainer(props) {
  const { token, logged, logOut } = props;
  return (
    <CoinsList token={token} logOut={logOut} logged={logged}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CoinsListContainer)