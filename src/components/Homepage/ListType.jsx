import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow_up from "../../img/arrow_up.svg";
import arrow_down from "../../img/arrow_down.svg";

import "../../index.css";
const ColumnContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 230px;
`;


function ListType(props) {
const {listName} = props

  return (
    <ColumnContainer>
        <h3> {listName + ' coins'}  </h3>
        <Link><p> Show all > </p> </Link>
    </ColumnContainer>
  );
}
export default ListType;
