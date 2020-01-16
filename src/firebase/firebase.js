import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBoI1NrDn0nNrODf_UW3rrrHup6UceUKJc",
    authDomain: "saga-6b530.firebaseapp.com",
    databaseURL: "https://saga-6b530.firebaseio.com",
    projectId: "saga-6b530",
    storageBucket: "saga-6b530.appspot.com",
    messagingSenderId: "602111993162",
    appId: "1:602111993162:web:24db29190519a5d36fcdb3"
};
const Firebase = firebase.initializeApp(config);
export default Firebase;