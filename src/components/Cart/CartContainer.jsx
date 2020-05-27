import React from "react";
import { bindActionCreators } from "redux";
import Cart from './Cart';
import { connect } from "react-redux";
import {coinToCart} from "../../store/coin/actions";

function CartContainer(props) {
  const { coinsInCart, coinToCart } = props;
  return (
    <Cart coinsInCart={coinsInCart} coinToCart={coinToCart} />
  );
}

const mapStateToProps = (state) => {
    return {
        coinsInCart:state.coin.coinsInCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        coinToCart: bindActionCreators(coinToCart, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)