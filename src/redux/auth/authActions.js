import * as actionTypes from './actionTypes';


export const authRequest = (email, password, isSignup) => {
    return {
        type: actionTypes.AUTH_REQUEST,
        payload: {
            email,
            password,
            isSignup
        }
    }
};

export const authStart=()=>{
    return{
        type:actionTypes.AUTH_START
    }
};

export const authSuccess = (token, userId, userEmail) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token,
            userId,
            userEmail
        }
    }
};

export const authFailed = (error) => {
    console.log(error)
    return {
        type: actionTypes.AUTH_FAILED,
        payload: error
    }
};

export const logoutRequest=()=>{
    return{
        type:actionTypes.LOGOUT_REQUEST
    }
};

export const logoutSuccess=()=>{
    return{
        type:actionTypes.LOGOUT_SUCCESS
    }
}

export const checkAuthRequest=(token)=>{
    return{
        type:actionTypes.CHECK_AUTH_REQUEST,
        payload: token
    }
}

export const checkSetLogout=()=>{
    return{
        type:actionTypes.CHECK_SET_LOGOUT
    }
}