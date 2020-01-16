import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getUsersRequest, addUserRequest,deleteUserRequest} from "./redux/actions/users"
import {setActiveUser} from "./redux/actions/auth";
import {incrementCounter} from"./redux/actions/counter"
import Loading from "./components/Loading";
import AddForm from "./components/AddForm";
import UsersList from "./components/UsersList";
import LoginForm from "./components/LoginForm";
import Firebase from "./firebase/firebase";

// Firebase Auth
// L: test@test.pl
// P: test13


//https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html

function App(props) {
    const {getUsersRequest} = props;

    useEffect(() => {
        getUsersRequest()
    }, []);

const addUser=(firstName, lastName)=>{
    const id=props.users.length;
    props.addUserRequest({firstName,lastName,id})
};


    Firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            // var displayName = user.displayName;
            // var email = user.email;
            // var emailVerified = user.emailVerified;
            // var photoURL = user.photoURL;
            // var isAnonymous = user.isAnonymous;
            // var uid = user.uid;
            // var providerData = user.providerData;
            // ...
            props.setActiveUser(user.email)
        } else {
            // User is signed out.
            // ...
            props.setActiveUser(user)
        }
    });


    return (

        <div className="App">
            <header className="App-header">
                {props.users.length&&props.userEmail ?
                    <>
                        <LoginForm/>
                        <UsersList users={props.users} deleteUser={props.deleteUserRequest}/>
                        <AddForm addUser={addUser}/>
                        <hr/>
                        {props.counter}
                        <br/>
                        <button onClick={props.incrementCounter}>+</button>
                    </>
                    :
                    <Loading/>
                }
            </header>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        users: state.users.users,
        userEmail:state.auth.userEmail,
        counter:state.counter.counter
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         getUsersRequest: () => {
//             dispatch(getUsersRequest())
//         },
//         addUserRequest: (data) => {
//             dispatch(addUserRequest())
//         },
//         deleteUserRequest: (id) => {
//             dispatch(deleteUserRequest(id))
//         },
//         setActiveUser: (email) => {
//             dispatch(setActiveUser(email))
//         }
//     };
// };

export default connect(mapStateToProps, {
    getUsersRequest,
    addUserRequest,
    deleteUserRequest,
    setActiveUser,
    incrementCounter

})(App);
