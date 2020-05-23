import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import '../../index.css';
const Menu = styled.nav`
display: flex;
width: 93%;
margin: 0 auto;
align-items: baseline;
padding: 30px 0 25px 0  ;
`;

const PageContainer = styled.h1`
width: 64%;
font-size: 50px;
font-weight: 300;
text-align:left;
min-width: 180px;
p{
  font-weight: 300;
  font-size: 14px;
  margin: 10px 0;
}
`;
const LinkContainer = styled.h2`
width: 12%;
text-align:right;
font-size: 25px;
font-weight: 300;
padding-left: 5px; 
`;



function Header(props) {
const {token, logOut, headerText, name, resetCoinsSearch, isAdmin, resetAdvancedSearch} = props;
return (
        <Menu>
            <PageContainer>
            <Link to="/" > {headerText} </Link>
            {headerText!=='GetCoin'&& <Link to="/"> <p> {"< Back to Homepage"}</p></Link>}
            </PageContainer>
            
            <LinkContainer style={{minWidth: '200px'}} >
            {token
            ?<Link to="/cabinet" onClick ={()=>{resetCoinsSearch([]); resetAdvancedSearch()}}> {isAdmin? 'Admin': name}'s cabinet </Link> 
            :<Link to="/register"> Registration </Link>}
            </LinkContainer>
            
            <LinkContainer style={{minWidth: '80px'}} >
            {token
            ?<Link to="/" onClick={()=>{logOut(token)}}> Logout </Link> 
            :<Link to="/login"> Login </Link>}
            </LinkContainer>

            {!isAdmin && <LinkContainer style={{minWidth: '60px'}} >
            <Link to="/cart"> Cart </Link>
            </LinkContainer>}
        </Menu>
)
}
export default Header;