import React from "react";
// import { bindActionCreators } from "redux";
import Cabinet from './Cabinet';
import { connect } from "react-redux";
// import { changeFirstName, changeSecondName } from "../../store/login/actions";

function CabinetContainer(props) {
  const { isAdmin} = props;
  return (
    <Cabinet isAdmin={isAdmin}/>
  );
}

const mapStateToProps = (state) => {
    return {
        isAdmin: state.login.admin
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeName: bindActionCreators(changeFirstName, dispatch),
//         changeSurname: bindActionCreators(changeSecondName, dispatch)
//     }
// }

export default connect(mapStateToProps)(CabinetContainer)