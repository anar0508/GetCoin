import {combineReducers} from 'redux';
import {logReducer} from './login/reducers';
import {regReducer} from './registration/reducers';
import {menuReducer} from './homepage/reducers';

export default combineReducers({
    login: logReducer,
    registration: regReducer,
    menu: menuReducer
});
