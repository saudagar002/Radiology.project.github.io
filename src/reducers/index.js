import { combineReducers } from 'redux';
import auth from './auth';
import cart from './cartReducer';

export default combineReducers({
    auth,
    cart,
});