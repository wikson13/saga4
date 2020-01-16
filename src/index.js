import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./redux/sagas";
import reducers from "./redux/reducers"
import axios from 'axios';


axios.defaults.baseURL='https://saga-6b530.firebaseio.com';

const composeEnchancers=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const sagaMiddleware=createSagaMiddleware()
const store=createStore(reducers,composeEnchancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
