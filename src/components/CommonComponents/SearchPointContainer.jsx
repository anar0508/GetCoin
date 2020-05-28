import React from "react";
import { bindActionCreators } from "redux";
import SearchPoint from "./SearchPoint";
import { connect } from "react-redux";
import { gettingCoin } from "../../store/coinlist/actions";
import {
  coinDeleting,
  startCoinEditing,
} from "../../store/adminCabinet/actions";
import "../../index.css";

function SearchPointContainer(props) {
  const { coin, key, getCoin, isAdmin, deleteCoin, editCoin, token } = props;
  return (
    <SearchPoint
      key={key}
      coin={coin}
      getCoin={getCoin}
      isAdmin={isAdmin}
      deleteCoin={deleteCoin}
      editCoin={editCoin}
      token={token}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    coins: state.homepage.coins,
    isAdmin: state.login.admin,
    token: state.login.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCoin: bindActionCreators(gettingCoin, dispatch),
    deleteCoin: bindActionCreators(coinDeleting, dispatch),
    editCoin: bindActionCreators(startCoinEditing, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPointContainer);
