import React, {useState} from 'react';
import Firebase from "../firebase/firebase";
import {connect} from "react-redux";

const LoginForm = (props) => {

    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')

    const loginButtonHandler=(e)=>{
        e.preventDefault();

       Firebase.auth().signInWithEmailAndPassword(login, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorCode);
            console.log(errorMessage);
        });

    };


    const logoutButtonHandler=()=>{
        Firebase.auth().signOut().then(function() {
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
            console.log(error)
        });
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

const mapStateToProps = state => {
    return {
        userEmail:state.auth.userEmail
    };
};



export default connect(mapStateToProps, )(LoginForm);




