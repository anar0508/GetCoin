import React from "react";
import styled from "styled-components";
import CreatableSelect from 'react-select/creatable';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 300px;
    margin-bottom: 20px;
  label {
    font-size: 14px;
  }
  Select {
    min-width: 250px;
    width: 60%;
    padding: 5px;
    outline: none;
    border: 1px solid black;
    text-align: left;
    font-size: 25px;
  }
`;

function SelectComponent(props) {
  const { labelText, options, value, handleChangeState} = props; 

  const customStyles = {
    container: (base) => ({
      ...base,
      minWidth: '250px',
      width: "60%",
      padding: "1.5px",
      outline: 'none',
      border: "1px solid black"     
      }), 
      control: (base) => ({
        ...base,
        border: "none"
      }),
    }

  const handleChange = (newValue: any, actionMeta: any) => {
    console.log(newValue.value);
    
    handleChangeState(newValue.value);
    };
 const handleInputChange = (inputValue: any, actionMeta: any) => {
  handleChangeState(inputValue);
    };

console.log(value);


  let propertyName = Object.getOwnPropertyNames(options[0])[0];
  let newOptions = options.map((el)=>{ return {value: el[propertyName], label: el[propertyName]} })
  return (
    <Container>    
    <label > {labelText} </label>
    <CreatableSelect
    defaultValue={value}
    placeholder={value}
    styles={customStyles}
    onChange={handleChange} 
    onInputChange={handleInputChange}
    options={newOptions}/>

  </Container>
  );
}

export default SelectComponent;
