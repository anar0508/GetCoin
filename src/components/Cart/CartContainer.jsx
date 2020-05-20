import React from "react";
import { bindActionCreators } from "redux";
import Cart from './Cart';
import { connect } from "react-redux";
import { loggingOut } from "../../store/login/actions";

function CartContainer(props) {
  const { token, logged, logOut } = props;
  return (
    <Cart token={token} logOut={logOut} logged={logged}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)