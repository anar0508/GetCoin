import React from "react";
import Coin from './Coin';
import { connect } from "react-redux";
import "../../index.css";

function CoinContainer(props) {
  const { coin } = props;
  return (
    <Coin coin={coin} />
  );
}

const mapStateToProps = (state) => {
    return {
        coin:state.coinlist.coin
    }
}

export default connect(mapStateToProps)(CoinContainer)