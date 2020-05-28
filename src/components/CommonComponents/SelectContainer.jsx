import React from "react";
import CreatableSelect from "react-select/creatable";
import { Container } from "./Styles/StyleSelectContainer";

function SelectComponent(props) {
  const { labelText, options, value, changeSelect } = props;

  const customStyles = {
    container: (base) => ({
      ...base,
      minWidth: "250px",
      width: "60%",
      padding: "1.5px",
      outline: "none",
      border: "1px solid black",
    }),
    control: (base) => ({
      ...base,
      border: "none",
    }),
  };

  const handleChange = (newValue: any, actionMeta: any) => {
    changeSelect(newValue.value);
  };

  let newOptions = [{ value: "", label: "any" }];
  if (options !== undefined) {
    let propertyName = Object.getOwnPropertyNames(options[0])[0];
    options.forEach((el) => {
      newOptions.push({ value: el[propertyName], label: el[propertyName] });
    });
  }

  return (
    <Container>
      <label> {labelText} </label>
      <CreatableSelect
        defaultValue={value}
        placeholder={value}
        styles={customStyles}
        onChange={handleChange}
        options={newOptions}
      />
    </Container>
  );
}

export default SelectComponent;
