import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  changeRegisterLogin,
  changeRegisterPassword,
  changeRepeatPassword,
  submittingRegisterForm,
  changeName,
} from "../../store/registration/actions";
import Registration from "./Registration";

function RegistrationContainer(props) {
  const {
    login,
    name,
    password,
    repeatPassword,
    changeLogin,
    changePassword,
    changeRepeatPassword,
    submitForm,
    changeName,
    showError,
    redirect,
  } = props;
  return (
    <Registration
      name={name}
      login={login}
      password={password}
      repeatPassword={repeatPassword}
      changeLogin={changeLogin}
      changePassword={changePassword}
      changeName={changeName}
      changeRepeatPassword={changeRepeatPassword}
      submitForm={submitForm}
      showError={showError}
      redirect={redirect}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.registration.name,
    login: state.registration.registerLogin,
    password: state.registration.registerPassword,
    repeatPassword: state.registration.repeatPassword,
    showError: state.registration.showError,
    redirect: state.registration.registerRedirect,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLogin: bindActionCreators(changeRegisterLogin, dispatch),
    changePassword: bindActionCreators(changeRegisterPassword, dispatch),
    changeRepeatPassword: bindActionCreators(changeRepeatPassword, dispatch),
    submitForm: bindActionCreators(submittingRegisterForm, dispatch),
    changeName: bindActionCreators(changeName, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationContainer);
