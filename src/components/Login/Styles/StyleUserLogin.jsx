import styled from "styled-components";
export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 350px;
  margin: 0 auto;
  width: 100%;
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
  margin: 0 auto 20px;
  width: 80%;
`;
export const Input = styled.input`
  min-width: 100px;
  width: 30%;
  outline: none;
  border: 1px solid black;
  padding: 5px;
  font-size: 20px;
`;
export const Label = styled.label`
  min-width: 100px;
  width: 30%;
  font-size: "12px";
  font-weight: "bold";
  text-align: start;
`;
export const Button = styled.input`
  width: 100px;
  outline: none;
  border: none;
  padding: 9px;
  background: #833ae0;
  color: white;
  text-align: center;
  font-size: 14px;
`;
