import React from "react";
import Header from "./Header";
import UserLoginContainer from "./UserLoginContainer";
import "../../index.css";

function Login(props) {
  return (
    <section>
      <Header headerText="GetCoin" />
      <UserLoginContainer />
    </section>
  );
}

export default Login;
