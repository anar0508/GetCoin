import React from "react";
import { bindActionCreators } from "redux";
import UserCabinet from './UserCabinet';
import { connect } from "react-redux";
import {startCoinEditing} from '../../store/adminCabinet/actions'; 
import { searchHandling } from "../../store/homepage/actions";

function UserCabinetContainer(props) {
  const { submitSearch} = props;
  return (
    <UserCabinet  submitSearch={submitSearch}  />
  );
}

const mapStateToProps = (state) => {
    return {
        isEditing: state.adminPage.isEditing
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitSearch: bindActionCreators(searchHandling, dispatch),
        addCoin: bindActionCreators(startCoinEditing, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCabinetContainer)