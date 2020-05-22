import React from "react";
import { bindActionCreators } from "redux";
import EditComponent from './EditComponent';
import { connect } from "react-redux";
import { coinEditing,startCoinEditing } from "../../store/adminCabinet/actions";



function EditComponentContainer(props) {
  const { editCoin, coin, selectInfo, isEditing } = props;
  return (
    <EditComponent coin={coin} editCoin={editCoin} countries={selectInfo.countriesList} 
    compositions={selectInfo.compositionsList} qualities={selectInfo.qualitiesList}
    isEditing={isEditing}/>
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
        isEditing: bindActionCreators(startCoinEditing, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditComponentContainer)