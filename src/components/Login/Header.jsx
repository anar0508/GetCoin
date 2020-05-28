import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import { Menu, PageContainer } from "../CommonComponents/Styles/StyleHeader";
import coinIcon from "../../img/coin.svg";

function Header(props) {
  const { headerText } = props;
  return (
    <Menu>
      <PageContainer>
        <Link to="/">
          <img src={coinIcon} alt="Coin" /> {headerText}
        </Link>
        <Link to="/">
          <p> {"< Back to Homepage"} </p>
        </Link>
      </PageContainer>
    </Menu>
  );
}
export default Header;
