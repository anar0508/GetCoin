import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import { ColumnContainer, H3, P } from "./Styles/StylesListType";

function ListType(props) {
  const { listName, submitSearch } = props;
  let searchItem = listName.toLowerCase();
  return (
    <ColumnContainer>
      <Link to="/coins">
        <H3
          onClick={() => {
            submitSearch(searchItem);
          }}
        >
          {listName + " coins"}
        </H3>
      </Link>
      <Link to="/coins">
        <P
          onClick={() => {
            submitSearch(searchItem);
          }}
        >
          Show all >
        </P>
      </Link>
      <Link to="/coins">
        <img
          src={`/api/image?type=${searchItem}`}
          onClick={() => {
            submitSearch(searchItem);
          }}
          alt="Coin"
        />
      </Link>
    </ColumnContainer>
  );
}
export default ListType;
