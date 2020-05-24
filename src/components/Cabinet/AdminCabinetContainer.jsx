import React from "react";
import { bindActionCreators } from "redux";
import AdminCabinet from './AdminCabinet';
import { connect } from "react-redux";
import {startCoinEditing} from '../../store/adminCabinet/actions'; 
import { searchHandling } from "../../store/homepage/actions";

function AdminCabinetContainer(props) {
  const { submitSearch, isEditing, addCoin} = props;
  return (
    <AdminCabinet  submitSearch={submitSearch}  addCoin={addCoin} isEditing={isEditing}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminCabinetContainer)