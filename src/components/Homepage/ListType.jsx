import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


import "../../index.css";
const ColumnContainer = styled.section`
  display: flex;
  flex-direction: column;
  width:25%;
  min-width: 283px;
  img{
    width: 214px;
    &:hover{
      width: 220px;
  }
  }
`;
const H3 = styled.h3`
  font-size: 28px;
  
&:hover{
    color: #833ae0;
  }
  
`;
const P = styled.p`
  font-weight: 300;
  font-size: 14px;
  margin: 10px 0;
  &:hover{font-weight: 600;}
`;



function ListType(props) {
  const { listName, submitSearch} = props;
  let searchItem =listName.toLowerCase();
  return (
    <ColumnContainer>
      <Link to="/coins" > <H3 onClick={()=>{submitSearch(searchItem)}}>  {listName + " coins"} </H3> </Link>
      <Link to="/coins" > <P onClick={()=>{submitSearch(searchItem)}}> Show all > </P></Link>
      <Link to="/coins" ><img src={`http://localhost:8000/image?type=${searchItem}`} onClick={()=>{submitSearch(searchItem)}} alt="Coin"/> </Link>
    </ColumnContainer>
  );
}
export default ListType;
