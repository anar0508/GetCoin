import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../index.css";
const SearchBar = styled.form`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  width: 93%;
  margin: 0 auto;
  align-items: baseline;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  text-align: left;
`;
const Input = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  width: 80%;
  align-items: center;
`;
const Button = styled.input`
  width: 100px;
  outline: none;
  border: none;
  padding: 9px;
 margin-left: 20px; 
  background: #833AE0;
  color: white;
  text-align: center;
  vertical-align: middle; 
  font-size: 14px;
`;
const SearchInput = styled.input`
  width: 60%;
  outline: none;
  text-align: left;
  font-size: 25px;
`;

function Search(props) {
  const [search, handleSearchInput] = useState("");

  const { token, logged, advancedSearch } = props;
  return (
    <SearchBar>
      <InputContainer>
        <label style={{ fontSize: "14px" }} htmlFor="searchInput"> Input field </label>
        <Input>
          <SearchInput type="text" value={search} onChange={(e) => {handleSearchInput(e.target.value); }}/>
          <Link to="/coins">
            <Button type='submit' value='Search' />
          </Link>
        </Input>
      </InputContainer>

      {/*             
            <LinkContainer>
            {logged
            ?<Link to="/cabinet"> My cabinet </Link> 
            :<Link to="/register"> Registration </Link>}
            </LinkContainer>

            <LinkContainer>
            <Link to="/cart"> Cart </Link>
            </LinkContainer> */}
    </SearchBar>
  );
}
export default Search;
