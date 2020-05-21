import React from "react";
import { Redirect } from "react-router-dom";
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
  background: #833ae0;
  color: white;
  text-align: center;
  font-size: 14px;
`;

function UserLogin(props) {
  const {
    login,
    password,
    changeLogin,
    changePassword,
    submitForm,
    showError,
    redirect,
  } = props;
  return redirect ? (
    <Redirect to="/" />
  ) : (
    <Form
      onSubmit={(e) => {
        submitForm(login, password);
        e.preventDefault();
      }}
    >
      <InputBox>
        <Label> email </Label>
        <Input
          type="email"
          value={login}
          placeholder="email"
          onChange={(e) => {
            changeLogin(e.target.value);
          }}
        />
      </InputBox>
      <InputBox>
        <Label> Password </Label>
        <Input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => {
            changePassword(e.target.value);
          }}
        />
        {/* <Label >
          <label htmlFor="save">Save me </label>
          <input id="save" value={true} type="checkbox" />
        </Label> */}
      </InputBox>

      {showError === true && <div> Login or Password is incorrect</div>}
      <Button type="submit" disabled={!login || !password} value="submit" />
    </Form>
  );
}

export default UserLogin;
