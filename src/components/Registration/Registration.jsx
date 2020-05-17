import React, {useState} from "react";


function Registration(props) {
  const [fieldsError, showFieldsError] = useState(false);
  const [passwordsError, showPasswordsError] = useState(false);
  const { login, password, repeatPassword, changeLogin, changePassword, changeRepeatPassword, submitForm} = props;
  return (
    <form onSubmit={(e) => {
      showPasswordsError(false)
      showFieldsError(false);

      if (login === "" || password === "") {
        showFieldsError(true);
        
      }  else if (password!==repeatPassword){
        showPasswordsError(true)
      }  else {
      submitForm(login, password);
      showPasswordsError(false)
      showFieldsError(false);
    }
    }}>
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
          minLength={6}
          placeholder="password"
          onChange={(e) => {
            changePassword(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="password"
          value={repeatPassword}
          minLength={6}
          placeholder="password"
          onChange={(e) => {
            changeRepeatPassword(e.target.value);
          }}
        />
      </div>
      <input type="submit" disabled={!login||!password||!repeatPassword} value='submit'/>
    </form>
  );
}


export default Registration