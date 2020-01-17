import {takeEvery, takeLatest, take, call, put, fork, delay} from "redux-saga/effects"
import * as actions from "../actions/counter";
import * as actionTypes from "../actions/actionTypes";
import * as api from "../../api/users"

function* incrementAsync() {
    yield delay(1000)
    yield put({type: actionTypes.ASYNC_INCREMENT_COUNTER_DO})
}

function* watchIncrementAsync() {
    yield takeLatest(actionTypes.ASYNC_INCREMENT_COUNTER, incrementAsync)
}

const counterSagas = [
    fork(watchIncrementAsync)
];

export default counterSagas;