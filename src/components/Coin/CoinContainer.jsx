import React from "react";
import Coin from './Coin';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {searchHandling} from "../../store/homepage/actions";
import {gettingCoin} from "../../store/coinlist/actions";
import "../../index.css";

function CoinContainer(props) {
  const { coin, token, submitSearch, coins, getCoin } = props;
  return (
    <Coin coin={coin} token={token} coins={coins} submitSearch={submitSearch} getCoin={getCoin} />
  );
}

const mapStateToProps = (state) => {
    return {
        coin:state.coinlist.coin, 
        token:state.login.token,
        coins:state.homepage.coins
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitSearch: bindActionCreators(searchHandling, dispatch),
    getCoin: bindActionCreators(gettingCoin, dispatch)
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinContainer)