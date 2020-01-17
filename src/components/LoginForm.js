import React, {useState} from 'react';
import Firebase from "../firebase/firebase";
import {useDispatch} from "react-redux";
import {authRequest} from "../redux/auth/authActions"
const LoginForm = (props) => {

    const dispatch = useDispatch();

    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')

    const loginButtonHandler=(e)=>{
        e.preventDefault();
dispatch(authRequest(login, password, false))
    };


    const logoutButtonHandler=()=>{

    };

    return (

            <fieldset>
                <legend>Login</legend>
                {!props.userEmail ?
                <>
                <label htmlFor="login">Login </label>
                <input type="text" id="login" value={login} onChange={e=>setLogin(e.target.value)}/>
                <br/>
                <label htmlFor="password">Password </label>
                <input type="text" id="password"  value={password} onChange={e=>setPassword(e.target.value)}/>
                <br/>
                <button  onClick={loginButtonHandler}>Login</button>
                    </>
                        :
                        <>
                            <p>{props.userEmail}</p>
                <button  onClick={logoutButtonHandler}>Log out</button>
                            </>
                }
            </fieldset>

    );
};



export default LoginForm;




