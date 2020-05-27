import React, { useState } from "react";
import PaginatorPageBar from "./PaginatorPageBar";
import { PaginatorMain, Page, SelectContainer } from "./Styles/stylePaginator";



function Paginator (props) {
  const [curPage, handleCurPage] = useState(1);
  const [coinPerPage, handleCoinPerPage] = useState(6);
 
 const incrementIndex = (e) => {
    const newPage =
      curPage + 1 > Math.ceil(props.rowElems.length / coinPerPage)
        ? Math.ceil(props.rowElems.length / coinPerPage)
        : curPage + 1;
        handleCurPage( newPage);
  };

  const  decrementIndex = (e) => {
    const newPage = curPage - 1 < 1 ? 1 : curPage - 1;
    handleCurPage( newPage);
  };

  const  handleChangePage = (selectedPage) => {
    handleCurPage(selectedPage);
  };


    if ( curPage >  Math.ceil(props.rowElems.length / coinPerPage) + 1) handleCurPage(1);
    
  

    return (
      <PaginatorMain>
       <SelectContainer>
        <label htmlFor="coinsNum"> Coins per page</label>
        <select id='coinsNum'  onChange={e=>{handleCoinPerPage(e.target.value)}}> 
          <option value="6" > 6 </option>
          <option value="10"> 10 </option>
          <option value="20"> 20 </option>
          <option value="50"> 50 </option>
          <option value="100"> 100 </option>
        </select>
       </SelectContainer>

        
        <Page>
          {props.rowElems.slice(
            (curPage - 1) * coinPerPage,
            (curPage - 1) * coinPerPage + coinPerPage
          )}
        </Page>
        <PaginatorPageBar
          pageAmount={Math.ceil(props.rowElems.length / coinPerPage)}
          onChange={handleChangePage}
          incrCallback={incrementIndex}
          decrCallback={decrementIndex}
          curSelectedPage={curPage}
        />
      </PaginatorMain>
    );
  }


export default Paginator;
