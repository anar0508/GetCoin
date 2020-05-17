import React from "react";
import { bindActionCreators } from "redux";
import Coin from './Coin';
import { connect } from "react-redux";
import { loggingOut } from "../../store/homepage/actions";

function CoinContainer(props) {
  const { token, logged, logOut } = props;
  return (
    <Coin token={token} logOut={logOut} logged={logged}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CoinContainer)