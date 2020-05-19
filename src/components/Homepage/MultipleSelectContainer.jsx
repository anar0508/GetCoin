import React from "react";
import styled from "styled-components";
import "../../index.css";

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  min-width: 250px;
  margin-top: 20px;
`;
const InputBox = styled.div`
  display: flex;
  align-items: center;
  min-width: 250px;
  width: 60%;
`;

const Input = styled.input`
  min-width: 100px;
  width: 30%;
  outline: none;
  border: 1px solid black;
  text-align: left;
  padding: 5px;
  font-size: 20px;
`;

function MultipleSelectContainer(props) {
  const { from, to, changeFrom, changeTo, labelText } = props;

  return (
    <SelectBox>
      <label style={({ fontSize: "14px" }, { fontWeight: "bold" })} htmlFor="">
        {labelText}
      </label>
      <InputBox>
        <label style={({ fontSize: "12px" }, { width: "15%" })} htmlFor="">
          from
        </label>
        <Input
          type="number"
          value={from}
          onChange={(e) => {
            changeFrom(e.target.value);
          }}
        />
        <label style={({ fontSize: "12px" }, { width: "15%" }, {textAlign:'center'}, {padding: '0 5px'}) } htmlFor="">
          to
        </label>
        <Input
          type="number"
          value={to}
          onChange={(e) => {
            changeTo(e.target.value);
          }}
        />

      </InputBox>
    </SelectBox>
  );
}
export default MultipleSelectContainer;
