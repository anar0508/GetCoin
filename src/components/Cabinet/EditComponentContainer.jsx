import React from "react";
import { bindActionCreators } from "redux";
import EditComponent from './EditComponent';
import { connect } from "react-redux";
import { coinEditing } from "../../store/adminCabinet/actions";

function EditComponentContainer(props) {
  const { editCoin, coin} = props;
  return (
    <EditComponent coin={coin} editCoin={editCoin}/>
  );
}

const mapStateToProps = (state) => {
    return {
        coin: state.adminPage.coin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editCoin: bindActionCreators(coinEditing, dispatch)
    }
}

export default connect(mapStateToProps)(EditComponentContainer)