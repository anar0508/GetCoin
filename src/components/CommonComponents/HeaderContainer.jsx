import React from "react";
import { bindActionCreators } from "redux";
import Header from './Header';
import { connect } from "react-redux";
import { loggingOut } from "../../store/login/actions";

function HeaderContainer(props) {
  const { token, logged, logOut, headerText } = props;
  return (
    <Header token={token} logOut={logOut} headerText={headerText} logged={logged}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)