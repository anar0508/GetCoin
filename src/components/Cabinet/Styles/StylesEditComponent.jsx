import styled from "styled-components";
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 96.5%;
  min-width: 500px;
  margin-top: 50px;
  margin-left: 3.5%;
  justify-content: space-evenly;
  align-items: flex-start;
  article {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    min-width: 500px;
  }
  button {
    display: block;
    width: 100px;
    outline: none;
    border: none;
    padding: 9px;
    margin-left: 20px;
    background: #833ae0;
    color: white;
    text-align: center;
    font-size: 14px;

  }
`;
export const Submit = styled.input`
  width: 100px;
  outline: none;
  border: none;
  padding: 9px;
  margin-left: 20px;
  background: #833ae0;
  color: white;
  text-align: center;
  font-size: 14px;
  display: block;
`;
export const File = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  input {
    cursor: pointer;
    padding: 120px 0 0 0;
    display: inline-block;
    color: black;
    text-align: center;
    background: white;
    width: 120px;
    height: 120px;
    border: 1px solid black;
    border-radius: 50%;
  }
  label {
    cursor: pointer;
    display: block;
  }
  span {
    position: absolute;
    left: 55px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 300px;
  margin-bottom: 20px;
  label {
    font-size: 14px;
  }
  textarea {
    min-width: 250px;
    width: 60%;
    padding: 0 5px;
    outline: none;
    border: 1px solid black;
    text-align: left;
    font-size: 14px;
    padding: 3px;
    height: 118px;
    resize: none;
    overflow: hidden;
  }
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;
