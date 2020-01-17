import userSagas from "./users";
import {all} from "redux-saga/effects"
import counterSagas from "./counter";
import authSagas from "../auth/authSaga";

export default function* rootSaga(){
    yield all([...userSagas, ...counterSagas,...authSagas])
}