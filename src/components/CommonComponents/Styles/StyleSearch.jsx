import styled from "styled-components";
export const SearchBar = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  min-width: 630px;
  margin-left: 3.5%; 
  align-items: baseline;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  div{
    display: flex;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5px;
  width:100%;
  min-width: 250px;
  align-items: center;
  }
  p{
    font-weight: 300;
cursor: pointer;
font-size: 14px;
text-decoration-line: underline;
min-width:60px;
img{  vertical-align: middle;
  margin-left:4px}
  &:hover{
    font-weight: 600;
  }
}
`;
export const Button = styled.input`
  width: 100px;
  outline: none;
  border: none;
  padding: 9px;
  cursor: pointer;
  margin-left: 20px;
  background: rgb(131, 58, 224);
  color: white;
  text-align: center;
  vertical-align: middle;
  font-size: 14px;
  &:hover{
    background: rgba(131, 58, 224, 0.5);
  }
`;
export const SearchInput = styled.input`
  min-width: 250px;
  width:30%;
  padding: 0 5px;
  outline: none;
  border: 1px solid black;
  text-align: left;
  font-size: 25px;
`;
