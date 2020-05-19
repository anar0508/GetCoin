import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import '../../index.css';
const Menu = styled.nav`
display: flex;
width: 93%;
margin: 0 auto;
align-items: baseline;
padding: 60px 0 35px 0  ;

`;
const PageContainer = styled.h1`
width: 64%;
font-size: 50px;
font-weight: 300;
text-align:left;
`;
const LinkContainer = styled.h2`
width: 12%;
text-align:right;
font-size: 25px;
font-weight: 300;
`;


function Header(props) {
const {token, logged, logOut} = props;
return (
        <Menu>
            <PageContainer>
            <Link to="/" > GetCoin </Link>
            </PageContainer>
            
            <LinkContainer>
            {logged
            ?<Link to="/cabinet"> My cabinet </Link> 
            :<Link to="/register"> Registration </Link>}
            </LinkContainer>
            
            <LinkContainer>
            {logged
            ?<Link to="/" onClick={()=>{logOut(token)}}> Logout </Link> 
            :<Link to="/login"> Login </Link>}
            </LinkContainer>

            <LinkContainer>
            <Link to="/cart"> Cart </Link>
            </LinkContainer>
        </Menu>
)
}
export default Header;