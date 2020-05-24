import React, {useState} from "react";
import HeaderContainer from "../CommonComponents/HeaderContainer";
import SearchResultsContainer from "../CommonComponents/SearchResultsContainer";
import EditComponentContainer from "./EditComponentContainer";
import styled from "styled-components";

const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  min-width: 450px;
  margin-left: 3.5%;
  align-items: baseline;
  label {
    font-size: 14px;
  }
  div {
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    min-width: 250px;
    align-items: center;
  }
  input {
    min-width: 250px;
    width: 30%;
    padding: 0 5px;
    outline: none;
    border: 1px solid black;
    text-align: left;
    font-size: 25px;
  }
button{
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
}
`;

const NewCoin = styled.div`
display: flex;
flex-direction: row;
margin-top: 20px;
align-items: center; 
div{
  
  cursor: pointer;
      margin-left: 3.5%;
    color: black;
    text-align: center;
    vertical-align: middle;
    padding-top: 50px;
    background: white;
    width: 130px;
    height: 130px;
    border: 1px solid black;
    border-radius: 50%;
    margin-right: 40px;
}
p{text-decoration: underline;
  cursor: pointer;}
`;

function AdminCabinet(props) {
  const { submitSearch, isEditing, addCoin } = props;
  const [search, handleSearchInput] = useState("");
    
  return (
    <>
      <HeaderContainer headerText="GetCoin" />
      
      {!isEditing
      ? <> <SearchBar>
        <label htmlFor="searchInput"> Input field </label>
        <div>
          <input
            type="text"
            value={search}
            onChange={e => handleSearchInput(e.target.value)}/>
          <button onClick={() => submitSearch(search)}> Search </button>
        </div>
      </SearchBar>
      <NewCoin>
          <div onClick={()=>addCoin(true, {})}>+</div>
          <p onClick={()=>addCoin(true, {})}>Add new coin</p>
      </NewCoin>
    <SearchResultsContainer/> </>
    :<EditComponentContainer/>
}


    </>
  );
}

export default AdminCabinet;
