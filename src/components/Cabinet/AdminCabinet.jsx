import React, {useState} from "react";
import HeaderContainer from "../CommonComponents/HeaderContainer";
import SearchResultsContainer from "../CommonComponents/SearchResultsContainer";
import EditComponentContainer from "./EditComponentContainer";
import { SearchBar, NewCoin } from "./Styles/StylesSearchBar";

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
