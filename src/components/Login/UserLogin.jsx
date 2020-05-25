import React from "react";
import { Redirect } from "react-router-dom";
import "../../index.css";
import { Form, InputBox, Label, Input, Button } from "./Styles/StyleUserLogin";
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
