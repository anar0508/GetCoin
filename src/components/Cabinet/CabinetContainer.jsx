import React from "react";
import { bindActionCreators } from "redux";
import Cabinet from './Cabinet';
import { connect } from "react-redux";
import { changeFirstName, changeSecondName } from "../../store/login/actions";

function CabinetContainer(props) {
  const { firstName, secondName, changeName, changeSurname } = props;
  return (
    <Cabinet firstName={firstName} secondName={secondName} changeName={changeName} changeSurname={changeSurname} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CabinetContainer)