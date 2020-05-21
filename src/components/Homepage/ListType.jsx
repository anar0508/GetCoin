import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


import "../../index.css";
const ColumnContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 283px;
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
  const { listName, submitSearch} = props;
  let searchItem =listName.toLowerCase();
  return (
    <ColumnContainer>
      <Link to="/coins" > <H3 onClick={()=>{submitSearch(searchItem)}}>  {listName + " coins"} </H3> </Link>
      <Link to="/coins" > <P onClick={()=>{submitSearch(searchItem)}}> Show all > </P></Link>
      <Image src={`http://localhost:8000/image?type=${listName}`} alt="Coin"/>
    </ColumnContainer>
  );
}
export default ListType;
