import * as actionTypes from './actionTypes';
import * as actions from './authActions';
import {fork, call, takeLatest,delay, takeEvery, put} from "@redux-saga/core/effects";
import axios from 'axios';
import {logoutSuccess} from "./authActions";

function* authRequest(action) {
    console.log(action)
    yield put(actions.authStart())
    const authData = {
        email: action.payload.email,
        password: action.payload.password,
        returnSecureToken: true
    };
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBoI1NrDn0nNrODf_UW3rrrHup6UceUKJc';
    if (!action.payload.isSignup) {
        url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBoI1NrDn0nNrODf_UW3rrrHup6UceUKJc';
    }

    try {
        const response = yield axios.post(url, authData)
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)

        yield localStorage.setItem('token', response.data.idToken)
        yield localStorage.setItem('email', response.data.email)
        yield localStorage.setItem('userId', response.data.localId)
        yield localStorage.setItem('expirationDate', expirationDate.getTime())
        yield put(actions.authSuccess(response.data.idToken, response.data.localId, response.data.email))
        yield put(actions.checkSetLogout())

    } catch (e) {
        yield put(actions.authFailed(e.response.data.error))
    }
}


function* logoutRequest() {
    yield localStorage.removeItem('email')
    yield localStorage.removeItem('userId')
    yield localStorage.removeItem('token')
    yield localStorage.removeItem('expirationDate')
    yield put(actions.logoutSuccess())
}

function* authCheck(action) {
    if (!action.payload.token) yield put(actions.logoutSuccess())

    const nowDate = new Date().getTime();
    const expirationDate = localStorage.getItem('expirationDate')
    if (nowDate >= expirationDate ) {
        yield put(actions.logoutSuccess())
    } else {
        const idToken=yield localStorage.getItem('token');
        const localId = yield localStorage.getItem('userId');
        const email = yield localStorage.getItem('email');
        yield put(actions.authSuccess(idToken, localId, email));
        yield put(actions.checkSetLogout())

    }
}

function*  checkSetTimeout(){
    yield delay(3600000)
    yield put(actions.logoutSuccess())
}

function* watchAuthSagas() {
    yield takeLatest(actionTypes.AUTH_REQUEST, authRequest);
    yield takeEvery(actionTypes.LOGOUT_REQUEST, logoutRequest);
    yield takeEvery(actionTypes.CHECK_AUTH_REQUEST, authCheck);
    yield takeEvery(actionTypes.CHECK_SET_LOGOUT,checkSetTimeout)
}


const authSagas = [
    fork(watchAuthSagas)
];

export default authSagas;