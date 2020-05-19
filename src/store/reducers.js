import {combineReducers} from 'redux';
import {logReducer} from './login/reducers';
import {regReducer} from './registration/reducers';
import {homepageReducer} from './homepage/reducers';
import {advancedSearchReducer}from './homepage/adSearch/reducers';

export default combineReducers({
    login: logReducer,
    registration: regReducer,
    homepage: homepageReducer,
    adSearch:advancedSearchReducer
});
