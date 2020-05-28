import React from "react";
import ListTypeContainer from "./ListTypeContainer";
import "../../index.css";
import { ListsContainer } from "./Styles/StyleCoinLists";

function CoinLists(props) {
  return (
    <ListsContainer>
      <ListTypeContainer listName="Bullion" />
      <ListTypeContainer listName="Exclusive" />
      <ListTypeContainer listName="Commemorative" />
      <ListTypeContainer listName="Popular" />
    </ListsContainer>
  );
}
export default CoinLists;
