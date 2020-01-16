import * as actionTypes from '../actions/actionTypes';

const initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USERS_SUCCESS: {
            return {
                users: action.payload.users
            }
        }
        // case actionTypes.ADD_USER_REQUEST:{
        //     return{
        //         users:[action.payload,...state.users]
        //     }
        // }
        default:
            return state
    }
};

export default usersReducer;