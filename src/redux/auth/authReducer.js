import * as actionTypes from "./actionTypes";

const initialState = {
    token: null,
    userId: null,
    userEmail: null,
    error: null,
    loading: false
};


export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                error: action.payload,
                loading:false
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                userEmail: action.payload.userEmail,
                loading: false
            }
        case actionTypes.LOGOUT_SUCCESS:
            return{
                ...state,
                token:null,
                userId:null,
                userEmail: null
            }
        default:
            return state
    }
}