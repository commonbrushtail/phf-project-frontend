import { combineReducers } from 'redux';
import authSlice from './auth.slice';
const rootReducer = combineReducers({
    authSlice
});

export default rootReducer;