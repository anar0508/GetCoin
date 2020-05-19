import React, { useEffect } from "react";
import styled from "styled-components";
import arrow_down from "../../img/arrow_down.svg";
import "../../index.css";

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 37%;
  min-width: 200px;
  margin-top: 20px;
`;

const ArrowBox = styled.div`
  position: relative;
  min-width: 200px;
  width: 80%;
`;

const Selector = styled.select`
  min-width: 200px;
  width: 100%;
  outline: none;
  text-align: left;
  border: 1px solid black;
  padding: 5px;
  font-size: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;


const Arrow = styled.img`
  position: absolute;
  display: block;
  top: 12px;
  right: 10px;
`;

function SelectContainer(props) {
  const { select, changeSelect, labelText, options } = props;

  let newOptions;

  if (options !== undefined) {
    let propertyName = Object.getOwnPropertyNames(options[0])[0];
    newOptions = options.map((opt) => {
      console.log(opt[propertyName]);
      return <option value={opt[propertyName]}>{opt[propertyName]}</option>;
    });
  } else {
    newOptions = [];
  }

  return (
    <SelectBox>
      <label style={{ fontSize: "14px" }, {fontWeight: 'bold'}} htmlFor="">
        {labelText}
      </label>
      <ArrowBox>
        <Selector
          type="select"
          id="selector"
          value={select}
          onChange={(e) => {
            changeSelect(e.target.value);
          }}
        >
          {newOptions}
        </Selector>
        <Arrow src={arrow_down} alt="Arrow" />
      </ArrowBox>
    </SelectBox>
  );
}
export default SelectContainer;
