import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import HeaderContainer from './HeaderContainer';
import SearchContainer from './SearchContainer';
import '../../index.css';


function HomePage(props) {
const {token, logged, logOut} = props;
return (
    <div>
        <HeaderContainer/>
        <SearchContainer/>
    </div>
)
}
export default HomePage;