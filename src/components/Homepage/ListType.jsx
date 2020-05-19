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

const H3 = styled.h3`
  font-size: 28px;
`;
const P = styled.p`
  font-weight: 300;
  font-size: 14px;
  margin: 10px 0;
`;

const Image = styled.img`
  width: 214px;
`;

function ListType(props) {
  const { listName } = props;

  return (
    <ColumnContainer>
      <Link to="/coins" onClick={()=>{}}>
        <H3> {listName + " coins"} </H3>
        <P> Show all > </P>
        <Image src={`http://localhost:8000/image?type=${listName}`} alt="Coin"/>
      </Link>
    </ColumnContainer>
  );
}
export default ListType;
