import { combineReducers } from 'redux';
import { logReducer } from './login/reducers';
import { regReducer } from './registration/reducers';
import { homepageReducer } from './homepage/reducers';
import { advancedSearchReducer } from './homepage/adSearch/reducers';
import { coinslistReducer } from './coinlist/reducers';
import { adminReducer } from './adminCabinet/reducers';
import { coinReducer } from './coin/reducers';



export default combineReducers({
    login: logReducer,
    registration: regReducer,
    homepage: homepageReducer,
    adSearch: advancedSearchReducer,
    coinlist: coinslistReducer,
    adminPage: adminReducer,
    coin: coinReducer
});
