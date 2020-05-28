import styled from "styled-components";
export const Adder = styled.form`
  display: flex;
  flex-direction: raw;
  width: 100%;
  padding: 30px;
  justify-content: space-evenly;
  input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  div {
    border: 2px solid #ddd;
    display: inline-flex;
  }

  div,
  div * {
    box-sizing: border-box;
  }

  button {
    outline: none;
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    margin: 0;
    position: relative;
  }

  button:before,
  button:after {
    display: inline-block;
    position: absolute;
    content: "";
    width: 1rem;
    height: 2px;
    background-color: #212121;
    transform: translate(-50%, -50%);
  }
  button.plus:after {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  input[type="number"] {
    font-family: sans-serif;
    max-width: 5rem;
    padding: 20px;
    background: rgba(196, 196, 196, 0.5);;
    border: solid #ddd;
    border-width: 0 2px;
    font-size: 2rem;
    height: 3rem;
    font-weight: bold;
    text-align: center;
  }
`;
