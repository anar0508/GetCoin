import React from "react";
import HeaderContainer from "../CommonComponents/HeaderContainer";
import SearchContainer from "../CommonComponents/SearchContainer";
import CoinLists from "./CoinLists";
import "../../index.css";

function HomePage(props) {
  const { advancedSearch } = props;
  return (
    <div>
      <HeaderContainer headerText="GetCoin" />
      <SearchContainer />
      {!advancedSearch && <CoinLists />}
    </div>
  );
}
export default HomePage;
