import React, { useState, useEffect } from "react";
import {Redirect} from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import "../../index.css";

const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 350px;
  margin: 0 auto;
  width: 100%;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  margin: 0 auto 20px;
  width: 80%;
`;

const Input = styled.input`
  min-width: 100px;
  width: 30%;
  outline: none;
  border: 1px solid black;
  padding: 5px;
  font-size: 20px;
`;

const Label = styled.label`
  min-width: 100px;
  width: 30%;
  font-size: "12px";
  font-weight: "bold";
  text-align: start;
`;

const Button = styled.input`
  width: 100px;
  outline: none;
  border: none;
  padding: 9px;
  margin-left: 20px;
  background: #833ae0;
  color: white;
  text-align: center;
  vertical-align: middle;
  font-size: 14px;
`;

function Registration(props) {
  const [passwordsError, showPasswordsError] = useState(false);
  const [redirect, handleRedirect] = useState(false);
  const [willRedirect, changeWillRedirect] = useState(false);
  const {
    login,
    password,
    repeatPassword,
    changeLogin,
    changePassword,
    changeRepeatPassword,
    submitForm,
  } = props;
  useEffect(()=>{}, [passwordsError])
  return (
    (redirect? <Redirect to="/login" />:
    <section>
      <Header headerText="GetCoin" />
      <Form
        onSubmit={(e) => {
          
          if (password !== repeatPassword) {
            showPasswordsError(true);
            setTimeout(()=>{showPasswordsError(false);}, 3000)
          } else {
            submitForm(login, password);
            showPasswordsError(false);
            changeWillRedirect(true);
            setTimeout(()=>{
              changeWillRedirect(false);
              handleRedirect(true);}, 3000);
          }
          e.preventDefault();
        }}
      >
        <InputBox>
          <Label> Login </Label>
          <Input
            type="text"
            value={login}
            placeholder="login"
            onChange={(e) => {
              changeLogin(e.target.value);
            }}
          />
        </InputBox>

        <InputBox>
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            minLength={6}
            placeholder="password"
            onChange={(e) => {
              changePassword(e.target.value);
            }}
          />
        </InputBox>

        <InputBox>
          <Label>Repeat password</Label>
          <Input
            type="password"
            value={repeatPassword}
            minLength={6}
            placeholder="password"
            onChange={(e) => {
              changeRepeatPassword(e.target.value);
            }}
          />
        </InputBox>
            {passwordsError && <p> Passwords don't match </p> }
            {willRedirect && <p> You were registered. We will proceed you to Login page. </p> }
        <Button
          type="submit"
          disabled={!login || !password || !repeatPassword}
          value="Register"
        />
      </Form>
    </section>
  ));
}

export default Registration;
