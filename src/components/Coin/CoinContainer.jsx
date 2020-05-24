import React from "react";
import Coin from './Coin';
import { connect } from "react-redux";
import "../../index.css";

function CoinContainer(props) {
  const { coin, token } = props;
  return (
    <Coin coin={coin} token={token} />
  );
}

const mapStateToProps = (state) => {
    return {
        coin:state.coinlist.coin, 
        token:state.login.token
    }
}

export default connect(mapStateToProps)(CoinContainer)