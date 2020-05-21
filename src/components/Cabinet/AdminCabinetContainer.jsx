import React from "react";
import { bindActionCreators } from "redux";
import AdminCabinet from './AdminCabinet';
import { connect } from "react-redux";
import { searchHandling } from "../../store/homepage/actions";

function AdminCabinetContainer(props) {
  const { isAdmin, submitSearch, isEditing} = props;
  return (
    <AdminCabinet isAdmin={isAdmin} submitSearch={submitSearch} isEditing={isEditing}/>
  );
}

const mapStateToProps = (state) => {
    return {
        isAdmin: state.login.admin,
        isEditing: state.adminPage.isEditing
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitSearch: bindActionCreators(searchHandling, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminCabinetContainer)