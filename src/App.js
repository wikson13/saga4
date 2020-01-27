import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import LoginForm from "./components/LoginForm";
import Loading from "./components/Loading";
import Main from "./views/Main";
import {checkAuthRequest} from "./redux/auth/authActions";
import {incrementCounter} from "./redux/actions/counter"
import {incrementCounterAsync} from "./redux/actions/counter"
// Firebase Auth
// L: test@test.pl
// P: test13


function App(props) {
    const isAuth=!!localStorage.getItem('token')
    useEffect(()=>{
        dispatch(checkAuthRequest(isAuth))
    },[])
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading)
    const error = useSelector(state => state.auth.error);
const counter = useSelector(state=>state.counter.counter)
    const load = loading ? <Loading/> : null

    return (

        <div className="App">
            {error && error.message}
            <header className="App-header">
                {load}
                {isAuth ? <Main/> : <LoginForm/> }
                <hr/>
                <br/>
                {counter}
                <button onClick={()=>dispatch(incrementCounter())}>+1</button>
                <button onClick={()=>dispatch(incrementCounterAsync())}>+1a</button>
            </header>
        </div>
    );
}


export default App;