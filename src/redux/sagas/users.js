import {takeEvery, takeLatest,take, call, put, fork} from "redux-saga/effects"
import * as actions from "../actions/users";
import * as actionTypes from "../actions/actionTypes";
import * as api from "../../api/users"




function* getUsers() {
    try {
        const result = yield call(api.getUsers)
        yield put(actions.getUsersSuccess({
            users: result.data
        }))
    } catch (e) {
        console.log(e)
    }
}

function* watchGetUsersRequest() {
    yield takeEvery(actionTypes.GET_USERS_REQUEST, getUsers)
}

function* addUser(action) {
    try {
        yield call(api.addUser, {firstName: action.payload.firstName, lastName: action.payload.lastName,id:action.payload.id});
        yield call(getUsers);
    } catch (e) {
        console.log(e)
    }
}

function* watchCreateUser() {
    yield takeLatest(actionTypes.ADD_USER_REQUEST, addUser)
}

function* deleteUser(userId){
    try{
        yield call(api.deleteUser, userId);
        yield call (getUsers);
    }catch (e) {
        console.log(e)
    }
}

function* watchDeleteUserRequest(){
    while(true){
        const action=yield take(actionTypes.DELETE_USER_REQUEST);
        yield call(deleteUser,action.payload.userId
        )
    }
}

const userSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUser),
    fork(watchDeleteUserRequest)
];

export default userSagas;
