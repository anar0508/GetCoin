import React from 'react';
import '../index.css';
import Login from './Login/Login';
import HomePageContainer from './Homepage/HomePageContainer';
import RegistrationContainer from './Registration/RegistrationContainer';
import CabinetContainer from './Cabinet/CabinetContainer';
import CoinsListPageContainer from './CoinsList/CoinsListPageContainer';
import CoinContainer from './Coin/CoinContainer';
import CartContainer from './Cart/CartContainer';
import { Route } from "react-router-dom";

function App(props) {
    return (
        <main>
            <Route path="/" exact>
                <HomePageContainer />
            </Route>
            <Route path="/register" exact>
                <RegistrationContainer />
            </Route>
            <Route path="/login" exact>
                <Login />
            </Route>
            <Route path="/cabinet" exact>
                <CabinetContainer />
            </Route>
            <Route path="/coins" exact>
                <CoinsListPageContainer />
            </Route>
            <Route path="/coin/:id" exact>
                <CoinContainer />
            </Route>
            <Route path="/cart" exact>
                <CartContainer />
            </Route>
        </main>
    );
}


export default App;
