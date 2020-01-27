import * as actionTypes from '../actions/actionTypes';

// export const incrementCounter=()=>{
//     return{
//         type:actionTypes.INCREMENT_COUNTER
//     }
// };
//
//
// export const asyncIncrementCounter=()=>{
//     return{
//         type:actionTypes.ASYNC_INCREMENT_COUNTER
//     }
// };
//
// export const asyncIncrementCounterDo=()=>{
//     return{
//         type:actionTypes.ASYNC_INCREMENT_COUNTER_DO
//     }
// };


export const incrementCounter = () =>{
    return {
        type:actionTypes.INCREMENT_COUNTER
    }
};

export const incrementCounterAsync=()=>{
    return{
        type:actionTypes.INCREMENT_COUNTER_ASYNC_REQUEST
    }
};