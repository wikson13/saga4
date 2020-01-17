import React from 'react';
import {logoutRequest} from "../redux/auth/authActions";
import {useDispatch} from "react-redux";

const Main = () => {
const dispatch = useDispatch();
    return (
        <div>
            <h2>Main</h2>
            <button onClick={()=>dispatch(logoutRequest())}>logout</button>
        </div>
    );
};

export default Main;
