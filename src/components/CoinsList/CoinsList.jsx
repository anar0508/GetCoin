import React from "react";
import {Link} from "react-router-dom";
import '../../index.css';

function CoinsList(props) {
const {token, logged, logOut, downloadCredits} = props;
return (
    <div>
        <nav className="menu">
            <Link className="menu-points" to="/" > GetCoin </Link>
            {logged
            ?<Link className="menu-points" to="/cabinet"> My cabinet </Link> 
            :<Link className="menu-points" to="/register"> Registration </Link>}

            {logged
            ?<Link className="menu-points" to="/" onClick={()=>{logOut(token)}}> Logout </Link> 
            :<Link className="menu-points" to="/login"> Login </Link>}

            <Link className="menu-points" to="/cart"> Cart </Link>
        </nav>
    </div>
)
}
export default CoinsList;