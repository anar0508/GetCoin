import React from "react";
import { bindActionCreators } from "redux";
import SearchPoint from './SearchPoint';
import { connect } from "react-redux";
import {gettingCoin} from "../../store/coinlist/actions";
import "../../index.css";


function SearchPointContainer(props) {
  const { coin, key, getCoin } = props;
  return (
    <SearchPoint key={key} coin={coin} getCoin={getCoin}/>
  );
}

const mapStateToProps = (state) => {
    return {
      coins:state.homepage.coins
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCoin: bindActionCreators(gettingCoin, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPointContainer)
