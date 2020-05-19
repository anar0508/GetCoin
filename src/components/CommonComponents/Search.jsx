import React, { useState } from "react";
import AdvancedSearchContainer from './AdvancedSearchContainer';
import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow_up from "../../img/arrow_up.svg";
import arrow_down from "../../img/arrow_down.svg";

import "../../index.css";
const SearchBar = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  min-width: 630px;
  margin-left: 3.5%; 
  align-items: baseline;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
`;
const Input = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5px;
  width:100%;
  min-width: 250px;
  align-items: center;
`;
const Button = styled.input`
  width: 100px;
  outline: none;
  border: none;
  padding: 9px;
  margin-left: 20px;
  background: #833ae0;
  color: white;
  text-align: center;
  vertical-align: middle;
  font-size: 14px;
`;
const SearchInput = styled.input`
  min-width: 250px;
  width:30%;
  padding: 0 5px;
  outline: none;
  border: 1px solid black;
  text-align: left;
  font-size: 25px;
`;
const AdvancedText = styled.div`
font-weight: 300;
cursor: pointer;
font-size: 14px;
text-decoration-line: underline;
min-width:60px;
`;
const Arrow = styled.img`
  vertical-align: middle;
  margin-left:4px
`;

function Search(props) {
  const [search, handleSearchInput] = useState("");
  const { advancedSearch, toggleAdvanced, getAdvancedInfo, submitSearch } = props;
  let path;
  if (!advancedSearch&&search===''){
    path='/';
  } else path='/coins';
  return (
    <SearchBar>
      <InputContainer>
        <label style={{ fontSize: "14px" }} htmlFor="searchInput"> Input field </label>
        <Input>
          <SearchInput
            type="text" value={search} onChange={(e) => {handleSearchInput(e.target.value);}}/>
          <Link to={path}>
            <Button type="submit" value="Search" onClick={() => {submitSearch(search); (advancedSearch&& toggleAdvanced()) }}/>
          </Link>
        </Input>
        <AdvancedText onClick= {()=>{ (advancedSearch===false && getAdvancedInfo()); toggleAdvanced(); }}>
          Advanced filter
          <Arrow src={advancedSearch ? arrow_up : arrow_down} alt="arrow" />
        </AdvancedText>
      </InputContainer>
      {advancedSearch && <AdvancedSearchContainer/>}


    
    </SearchBar>
  );
}
export default Search;
