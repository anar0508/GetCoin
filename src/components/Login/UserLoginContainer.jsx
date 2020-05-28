import React from "react";
import { bindActionCreators } from "redux";
import UserLogin from "./UserLogin";
import { connect } from "react-redux";
import {
  changeLogin,
  changePassword,
  loggingIn,
} from "../../store/login/actions";

function UserLoginContainer(props) {
  const {
    login,
    password,
    changeLogin,
    changePassword,
    submitForm,
    showError,
    redirect,
  } = props;
  return (
    <UserLogin
      showError={showError}
      login={login}
      password={password}
      redirect={redirect}
      changeLogin={changeLogin}
      changePassword={changePassword}
      submitForm={submitForm}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    login: state.login.login,
    password: state.login.password,
    showError: state.login.credError,
    redirect: state.login.redirect,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLogin: bindActionCreators(changeLogin, dispatch),
    changePassword: bindActionCreators(changePassword, dispatch),
    submitForm: bindActionCreators(loggingIn, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLoginContainer);
