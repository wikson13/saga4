import {combineReducers} from 'redux';
import usersReducer from "./users";
import authReducer from "./auth";
import counterReducer from "./counter";

export default combineReducers({
    users:usersReducer,
    auth:authReducer,
    counter:counterReducer
})