import * as actionTypes from './actionTypes'

export const getUsersRequest = () => ({
    type: actionTypes.GET_USERS_REQUEST
});

export const getUsersSuccess = ({users}) => {
    return ({
        type: actionTypes.GET_USERS_SUCCESS,
        payload: {
            users
        }
    })
};

export const addUserRequest = (newUser)=>{
    return({
        type: actionTypes.ADD_USER_REQUEST,
        payload:newUser
    })
};

export const deleteUserRequest=(userId)=>{
    return({
        type:actionTypes.DELETE_USER_REQUEST,
        payload:{userId}
    })
};