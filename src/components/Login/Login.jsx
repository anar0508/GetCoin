import React, { useState, useEffect } from "react";
import Header from "./Header";
import UserLoginContainer from "./UserLoginContainer";
import {Redirect} from "react-router-dom";
import styled from "styled-components";
import "../../index.css";



function Login(props) {
  return (
    <section>
      <Header headerText="GetCoin" />
        <UserLoginContainer/>
    </section>
  );
}


export default Login;