import React from "react";
import { bindActionCreators } from "redux";
import Header from './Header';
import { connect } from "react-redux";
import { loggingOut } from "../../store/login/actions";

function HeaderContainer(props) {
  const { token, logged, logOut, headerText, name, isAdmin } = props;
  return (
    <Header token={token} logOut={logOut} headerText={headerText} logged={logged} name={name} isAdmin={isAdmin}/>
  );
}

const mapStateToProps = (state) => {
    return {
        token:state.login.token,
        logged:state.login.logged,
        name:state.login.logName,
        isAdmin:state.login.admin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: bindActionCreators(loggingOut, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)