import React from "react";
import HeaderContainer from '../CommonComponents/HeaderContainer';
import SearchContainer from '../CommonComponents/SearchContainer';
import SearchResultsContainer from '../CommonComponents/SearchResultsContainer';
import '../../index.css';


function CoinsListPage(props) {
const {advancedSearch} = props;
return (
    <div>
        <HeaderContainer headerText='Results of search'/>
        <SearchContainer/>
        {!advancedSearch && <SearchResultsContainer/>}
    </div>
)
}
export default CoinsListPage;