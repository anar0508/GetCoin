import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 300px;
    margin-bottom: 20px;
  label {
    font-size: 14px;
  }
  input {
    min-width: 250px;
    width: 60%;
    padding: 5px;
    outline: none;
    border: 1px solid black;
    text-align: left;
    font-size: 25px;
  }
`;

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
