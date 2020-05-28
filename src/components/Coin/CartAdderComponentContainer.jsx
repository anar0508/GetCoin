import React from "react";
import CartAdderComponent  from './CartAdderComponent';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {coinToCart} from "../../store/coin/actions";
import "../../index.css";

function CartAdderComponentContainer(props) {
  const { coin, maxValue, price, coinToCart, coinsInCart } = props;
  return (
    <CartAdderComponent coin={coin} maxValue={maxValue} price={price} coinToCart={coinToCart} coinsInCart={coinsInCart}/>
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
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartAdderComponentContainer)