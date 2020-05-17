import React from "react";
import { bindActionCreators } from "redux";
import Search from './Search';
import { connect } from "react-redux";
import {  } from "../../store/homepage/actions";

function SearchContainer(props) {
  const { token, logged } = props;
  return (
    <Search token={token} logged={logged}/>
  );
}

const mapStateToProps = (state) => {
    return {
        token:state.login.token,
        logged:state.login.logged
    }
}



export default connect(mapStateToProps)(SearchContainer)