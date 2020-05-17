import React from "react";
import { bindActionCreators } from "redux";
import Login from './Login';
import { connect } from "react-redux";
import { changeFirstName, changeSecondName } from "../../store/login/actions";

function LoginContainer(props) {
  const { firstName, secondName, changeName, changeSurname } = props;
  return (
    <Login firstName={firstName} secondName={secondName} changeName={changeName} changeSurname={changeSurname} />
  );
}

const mapStateToProps = (state) => {
    return {
        firstName: state.login.firstName,
        secondName: state.login.secondName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: bindActionCreators(changeFirstName, dispatch),
        changeSurname: bindActionCreators(changeSecondName, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)