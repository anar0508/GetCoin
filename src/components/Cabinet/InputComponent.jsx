import React from "react";
import { Container } from "./Styles/StylesInputComponent";

function InputComponent(props) {
  const { labelText, type, value, handleChange} = props; 
    
  return (
    <Container>    
    <label > {labelText} </label>
        <input
          type={type}
          value={value}
          onChange={e => handleChange(e.target.value)}/>
  </Container>
  );
}

export default InputComponent;
