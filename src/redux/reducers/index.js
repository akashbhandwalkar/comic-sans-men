import { combineReducers } from 'redux';
import weatherReducer from './weather';

import soilReducer from './soil';
import uviReducer from './uvi';

export default combineReducers({
    weatherReducer,
    soilReducer,
    uviReducer
})