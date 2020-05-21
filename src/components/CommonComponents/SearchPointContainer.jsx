import React from "react";
import { bindActionCreators } from "redux";
import SearchPoint from './SearchPoint';
import { connect } from "react-redux";
import {gettingCoin} from "../../store/coinlist/actions";
import {coinDeleting, editCoin} from "../../store/adminCabinet/actions";
import "../../index.css";


function SearchPointContainer(props) {
  const { coin, key, getCoin, isAdmin, deleteCoin, editCoin } = props;
  return (
    <SearchPoint key={key} coin={coin} getCoin={getCoin} isAdmin={isAdmin} deleteCoin={deleteCoin} editCoin={editCoin}/>
  );
}

const mapStateToProps = (state) => {
    return {
      coins:state.homepage.coins, 
      isAdmin:state.login.admin
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCoin: bindActionCreators(gettingCoin, dispatch), 
    deleteCoin: bindActionCreators(coinDeleting, dispatch), 
    editCoin: bindActionCreators(editCoin, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPointContainer)
