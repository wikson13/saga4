import * as actionTypes from '../actions/actionTypes';


const initialState={
    counter:0
};

const counterReducer=(state=initialState,action)=>{
    switch(action.type){
        // case actionTypes.INCREMENT_COUNTER:{
        //     return{
        //         counter:state.counter+1
        //     }
        // }
        // case actionTypes.ASYNC_INCREMENT_COUNTER_DO:{
        //     return{
        //         counter:state.counter+1
        //     }
        // }
        case actionTypes.INCREMENT_COUNTER:{
            return {
                counter:state.counter+1
            }
        }
        default: return state
    }
}

export default counterReducer;