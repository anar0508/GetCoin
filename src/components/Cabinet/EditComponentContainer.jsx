import React from "react";
import { bindActionCreators } from "redux";
import EditComponent from './EditComponent';
import { connect } from "react-redux";
import { coinEditing, startCoinEditing, coinAdding, editCoin } from "../../store/adminCabinet/actions";



function EditComponentContainer(props) {
  const { editCoin, coin, selectInfo, isEditing, addCoin, cancelEdit } = props;
  return (
    <EditComponent coin={coin} editCoin={editCoin} countries={selectInfo.countriesList} 
    compositions={selectInfo.compositionsList} qualities={selectInfo.qualitiesList}
    isEditing={isEditing} addCoin={addCoin} cancelEdit={cancelEdit}/>
  );
}

const mapStateToProps = (state) => {
    return {
        coin: state.adminPage.coin,
        selectInfo: state.homepage.adSearchInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editCoin: bindActionCreators(coinEditing, dispatch),
        addCoin: bindActionCreators(coinAdding, dispatch),
        cancelEdit: bindActionCreators(editCoin, dispatch),
        isEditing: bindActionCreators(startCoinEditing, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditComponentContainer)