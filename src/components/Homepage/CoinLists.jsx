import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ListTypeContainer from './ListTypeContainer';
import arrow_up from "../../img/arrow_up.svg";
import arrow_down from "../../img/arrow_down.svg";

import "../../index.css";
const ListsContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 80%;
  min-width: 630px;
  margin-left: 3.5%;
  margin-top: 50px;
`;


function CoinLists(props) {

  return (
    <ListsContainer>
      <ListTypeContainer listName = 'Bullion'/>
      <ListTypeContainer listName = 'Exclusive'/>
      <ListTypeContainer listName = 'Commemorative'/>
    </ListsContainer>
  );
}
export default CoinLists;