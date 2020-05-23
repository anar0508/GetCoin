import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../index.css";
const Menu = styled.nav`
  display: flex;
  width: 93%;
  margin: 0 auto;
  align-items: baseline;
  padding: 30px 0 25px 0;
`;
const PageContainer = styled.h1`
  width: 64%;
  font-size: 50px;
  font-weight: 300;
  text-align: left;
  p {
    font-weight: 300;
    font-size: 14px;
    margin: 10px 0;
  }
`;

function Header(props) {
  const { headerText } = props;
  return (
    <Menu>
      <PageContainer>
        <Link to="/"> {headerText} </Link>
      </PageContainer>
    </Menu>
  );
}
export default Header;
