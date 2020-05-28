import React from "react";
import Cabinet from "./Cabinet";
import { connect } from "react-redux";

function CabinetContainer(props) {
  const { isAdmin } = props;
  return <Cabinet isAdmin={isAdmin} />;
}

const mapStateToProps = (state) => {
  return {
    isAdmin: state.login.admin,
  };
};

export default connect(mapStateToProps)(CabinetContainer);
