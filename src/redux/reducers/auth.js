import * as actionTypes from "../actions/actionTypes";


const initialState={
    userEmail:null
};

const authReducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.SET_ACTIVE_USER:{
            return{
                userEmail:action.payload
            }
        }
        default: return state

    }
};

export default authReducer;