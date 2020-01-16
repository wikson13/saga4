import * as actionTypes from './actionTypes';

export const setActiveUser=(userEmail)=>{
    return {
        type:actionTypes.SET_ACTIVE_USER,
        payload:userEmail
    }
};