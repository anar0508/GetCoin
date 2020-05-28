import React, { useState } from "react";
import AdvancedSearchContainer from "./AdvancedSearchContainer";
import { Link } from "react-router-dom";
import arrow_up from "../../img/arrow_up.svg";
import arrow_down from "../../img/arrow_down.svg";
import "../../index.css";
import {
  SearchBar,
  InputContainer,
  SearchInput,
  Button,
} from "./Styles/StyleSearch";

function Search(props) {
  const [search, handleSearchInput] = useState("");
  const {
    advancedSearch,
    toggleAdvanced,
    getAdvancedInfo,
    submitSearch,
  } = props;
  let path = "/coins";
  return (
    <SearchBar>
      <InputContainer>
        <label htmlFor="searchInput"> Input field </label>
        <div>
          <SearchInput
            type="text"
            value={search}
            onChange={(e) => {
              handleSearchInput(e.target.value);
            }}
          />
          <Link to={path}>
            <Button
              type="submit"
              value="Search"
              disabled={!advancedSearch && search === ""}
              onClick={() => {
                submitSearch(search);
                advancedSearch && toggleAdvanced();
              }}
            />
          </Link>
        </div>
        <p
          onClick={() => {
            advancedSearch === false && getAdvancedInfo();
            toggleAdvanced();
          }}
        >
          Advanced filter
          <img src={advancedSearch ? arrow_up : arrow_down} alt="arrow" />
        </p>
      </InputContainer>
      {advancedSearch && <AdvancedSearchContainer />}
    </SearchBar>
  );
}
export default Search;
