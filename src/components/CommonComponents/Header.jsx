import React from "react";
import { Link } from "react-router-dom";
import coinIcon from "../../img/coin.svg";
import "../../index.css";
import { Menu, PageContainer, LinkContainer } from "./Styles/StyleHeader";

function Header(props) {
  const {
    token,
    logOut,
    headerText,
    name,
    resetCoinsSearch,
    isAdmin,
    resetAdvancedSearch,
  } = props;
  return (
    <Menu>
      <PageContainer>
        <Link to="/">
          <img src={coinIcon} alt="Coin" /> {headerText}
        </Link>
        {headerText !== "GetCoin" && (
          <Link to="/">
            <p> {"< Back to Homepage"} </p>
          </Link>
        )}
      </PageContainer>

      {token && !isAdmin && (
        <LinkContainer style={{ minWidth: "60px" }}>
          <Link to="/cart">
            Cart({!localStorage.getItem("cart")? 0:JSON.parse(localStorage.getItem("cart")).length})
          </Link>
        </LinkContainer>
      )}

      <LinkContainer style={{ minWidth: "200px" }}>
        {token ? (
          <Link
            to="/cabinet"
            onClick={() => {
              resetCoinsSearch([]);
              resetAdvancedSearch();
            }}
          >
            {isAdmin ? "Admin" : name}'s cabinet{" "}
          </Link>
        ) : (
          <Link to="/register"> Registration </Link>
        )}
      </LinkContainer>

      <LinkContainer style={{ minWidth: "80px" }}>
        {token ? (
          <Link
            to="/"
            style={{ color: "red" }}
            onClick={() => {
              logOut(token);
            }}
          >
            Logout
          </Link>
        ) : (
          <Link to="/login"> Login </Link>
        )}
      </LinkContainer>
    </Menu>
  );
}
export default Header;
