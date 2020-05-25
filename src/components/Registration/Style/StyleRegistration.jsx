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
  div{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  min-width: 350px;
  margin: 10px auto;
  width: 100%;
  }
`;
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
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
  min-width: 70px;
  width: 10%;
  outline: none;
  border: none;
  padding: 9px;
  margin-top: 20px;
  background: #833ae0;
  color: white;
  text-align: center;
  vertical-align: middle;
  font-size: 14px;
`;
