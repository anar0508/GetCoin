import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import HeaderContainer from './HeaderContainer';
import SearchContainer from './SearchContainer';
import CoinLists from './CoinLists';
import '../../index.css';


function HomePage(props) {
const {token, logged, logOut, advancedSearch} = props;
return (
    <div>
        <HeaderContainer/>
        <SearchContainer/>
        {!advancedSearch && <CoinLists/>}
    </div>
)
}
export default HomePage;