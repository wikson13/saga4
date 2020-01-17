import {combineReducers} from 'redux';
import usersReducer from "./users";
import authReducer from "../auth/authReducer";
import counterReducer from "./counter";

export default combineReducers({
    users:usersReducer,
    auth:authReducer,
    counter:counterReducer
})