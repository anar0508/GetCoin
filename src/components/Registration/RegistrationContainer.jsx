import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeLogin, changePassword, changeRepeatPassword, submittingForm } from "../../store/registration/actions";
import Registration from "./Registration";

function RegistrationContainer(props) {
  const {
    login,
    password,
    repeatPassword,
    changeLogin,
    changePassword,
    changeRepeatPassword,
    submitForm
  } = props;
  return (
    <Registration
      login={login}
      password={password}
      repeatPassword={repeatPassword}
      changeLogin={changeLogin}
      changePassword={changePassword}
      changeRepeatPassword={changeRepeatPassword}
      submitForm = {submitForm}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    login: state.registration.login,
    password: state.registration.password,
    repeatPassword: state.registration.repeatPassword,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLogin: bindActionCreators(changeLogin, dispatch),
    changePassword: bindActionCreators(changePassword, dispatch),
    changeRepeatPassword: bindActionCreators(changeRepeatPassword, dispatch),
    submitForm: bindActionCreators(submittingForm, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationContainer);
