import React from "react";
import { bindActionCreators } from "redux";
import Coin from './Coin';
import { connect } from "react-redux";
import "../../index.css";
// import { loggingOut } from "../../store/homepage/actions";

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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         logOut: bindActionCreators(loggingOut, dispatch)
//     }
// }

export default connect(mapStateToProps)(CoinContainer)