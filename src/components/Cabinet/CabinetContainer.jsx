import React from "react";
import { bindActionCreators } from "redux";
import Cabinet from './Cabinet';
import { connect } from "react-redux";
// import { changeFirstName, changeSecondName } from "../../store/login/actions";

function CabinetContainer(props) {
  // const { firstName, secondName, changeName, changeSurname } = props;
  return (
    <Cabinet />
  );
}

const mapStateToProps = (state) => {
    return {
        firstName: state.login.login,
        secondName: state.login.password
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeName: bindActionCreators(changeFirstName, dispatch),
//         changeSurname: bindActionCreators(changeSecondName, dispatch)
//     }
// }

export default connect(mapStateToProps)(CabinetContainer)