import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../Login/Header";
import "../../index.css";
import {
  Form,
  InputBox,
  Label,
  Input,
  Button,
} from "./Style/StyleRegistration";

function Registration(props) {
  const [passwordsError, showPasswordsError] = useState(false);
  const {
    name,
    login,
    password,
    repeatPassword,
    changeName,
    changeLogin,
    changePassword,
    changeRepeatPassword,
    submitForm,
    showError,
    redirect,
  } = props;

  return redirect ? (
    <Redirect to="/login" />
  ) : (
    <section>
      <Header headerText="GetCoin" />

      <Form
        onSubmit={(e) => {
          if (password !== repeatPassword) {
            showPasswordsError(true);
            setTimeout(() => {
              showPasswordsError(false);
            }, 3000);
          } else {
            showPasswordsError(false);
            submitForm(login, password);
          }
          e.preventDefault();
        }}
      >
        <div>
          <InputBox>
            <Label> Name </Label>
            <Input
              type="text"
              value={name}
              placeholder="name"
              onChange={(e) => {
                changeName(e.target.value);
              }}
            />
          </InputBox>

          <InputBox>
            <Label> Email </Label>
            <Input
              type="email"
              value={login}
              maxLength={48}
              placeholder="Email"
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

          <Button
            type="submit"
            disabled={!login || !password || !repeatPassword}
            value="Register"
          />
        </div>
        {passwordsError && <p> Passwords don't match </p>}
        {showError && <p> There is another person with this login </p>}
      </Form>
    </section>
  );
}

export default Registration;
