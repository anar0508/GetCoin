import React from "react";
import "../../index.css";
import { SelectBox } from "./Styles/StyleMultipleSelect";

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
