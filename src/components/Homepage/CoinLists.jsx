import React from "react";
import styled from "styled-components";
import ListTypeContainer from './ListTypeContainer';


import "../../index.css";
const ListsContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  min-width: 500px;
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
