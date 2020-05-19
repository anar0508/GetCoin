import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from "react-router-dom";
import  rootReducer  from './store/reducers';
import logger from 'redux-logger'

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <BrowserRouter> <Provider store={store}> <App /> </Provider> </BrowserRouter>,
  document.getElementById('root')
);
