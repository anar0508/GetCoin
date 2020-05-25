import styled from "styled-components";
export const SelectBox = styled.div`
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
