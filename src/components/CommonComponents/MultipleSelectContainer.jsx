import React from "react";
import styled from "styled-components";
import "../../index.css";

const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  width: 37%;
  min-width: 200px;
  margin-bottom: 20px;
  
  label {
    font-size: 14px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    min-width: 250px;
    width: 80%;
    justify-content: space-evenly;
  }
  input {
    min-width: 100px;
    width: 30%;
    outline: none;
    border: 1px solid black;
    text-align: left;
    padding: 5px;
    font-size: 20px;
    height: 40px
  }
`;

function MultipleSelectContainer(props) {
  const { from, to, changeFrom, changeTo, labelText } = props;

  return (
    <SelectBox>
      <label htmlFor="">{labelText}</label>
      <div>
        <label style={({ fontSize: "12px" }, { width: "15%" })} htmlFor="">
          from
        </label>
        <input
          type="number"
          value={from}
          onChange={(e) => {
            changeFrom(e.target.value);
          }}
        />
        <label
          style={
            ({ fontSize: "12px" },
            { width: "15%" },
            { textAlign: "center" },
            { padding: "0 5px" })
          }
          htmlFor=""
        >
          to
        </label>
        <input
          type="number"
          value={to}
          onChange={(e) => {
            changeTo(e.target.value);
          }}
        />
      </div>
    </SelectBox>
  );
}
export default MultipleSelectContainer;
