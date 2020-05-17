import React, {useState} from "react";


function Login(props) {
  const { login, password, credentialsError, changeLogin, changePassword, showCredentialsError, submitForm} = props;
  return (
    <form onSubmit={(e) => {
      showCredentialsError(false);
      submitForm(login, password);}}>
      <div>
        <input
          type="text"
          value={login}
          placeholder="login"
          onChange={(e) => {
            changeLogin(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => {
            changePassword(e.target.value);
          }}
        />
      </div>
      {credentialsError && <div> Login or Password is incorrect</div>}
      <input type="submit" disabled={!login||!password} value='submit'/>
    </form>
  );
}


export default Login;