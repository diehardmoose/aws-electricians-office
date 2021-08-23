import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import other from './temp';

export default combineReducers({
    other,
    alert,
    auth
});