import React from 'react';
import '../index.css';
import { connect } from 'react-redux';
import LoginContainer from './Login/LoginContainer';
import HomePageContainer from './Homepage/HomePageContainer';
import RegistrationContainer from './Registration/RegistrationContainer';
import CabinetContainer from './Cabinet/CabinetContainer';
import CoinsListContainer from './CoinsList/CoinsListContainer';
import CoinContainer from './Coin/CoinContainer';
import CartContainer from './Cart/CartContainer';
import {Route} from "react-router-dom";

function App(props) {
    return (
        <main>
            <Route path="/" exact>
                <HomePageContainer/>
            </Route>
            <Route path="/register" exact>
                <RegistrationContainer />
            </Route>
            <Route path="/login" exact>
                <LoginContainer />
            </Route>
            <Route path="/cabinet" exact>
                <CabinetContainer />
            </Route>
            <Route path="/coins" exact>
                <CoinsListContainer />
            </Route>
            <Route path="/coins/:id" exact>
                <CoinContainer />
            </Route>
            <Route path="/cart" exact>
                <CartContainer />
            </Route>
        </main>
    );
}


export default App;
