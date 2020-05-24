import React, { useState} from "react";
import { Redirect } from "react-router-dom";
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
  div{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  min-width: 350px;
  margin: 10px auto;
  width: 100%;
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
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
  min-width: 70px;
  width: 10%;
  outline: none;
  border: none;
  padding: 9px;
  margin-top: 20px;
  background: #833ae0;
  color: white;
  text-align: center;
  vertical-align: middle;
  font-size: 14px;
`;

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
        <div >
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
