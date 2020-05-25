import React from "react";
import {Link} from 'react-router-dom';
import HeaderContainer from "../CommonComponents/HeaderContainer";
import {ColumnContainer, H3, P} from '../Homepage/Styles/StylesListType';
import styled from 'styled-components';

const ListsContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  min-width: 500px;
  margin-left: 3.5%;
  margin-top: 50px;
`;
function UserCabinet(props) {
  const { submitSearch} = props; 
    
  return (
    <section>
      <HeaderContainer headerText="GetCoin"/>   

      <ListsContainer>
        <ColumnContainer>
          <Link to="/coins" > <H3 onClick={()=>{submitSearch('mycoins')}}>  My coins </H3> </Link>
          <Link to="/coins" > <P onClick={()=>{submitSearch('mycoins')}}> Show all > </P></Link>
        </ColumnContainer>

        <ColumnContainer>
          <Link to="/coins" > <H3 onClick={()=>{submitSearch('history')}}>  History of View </H3> </Link>
          <Link to="/coins" > <P onClick={()=>{submitSearch('history')}}> Show all > </P></Link>
        </ColumnContainer>
 
      </ListsContainer> 

  </section>
  );
}

export default UserCabinet;
