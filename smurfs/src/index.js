import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import thunk from 'redux-thunk'
import{Provider}from 'react-redux';
import{reducer}from'./reducers/index.js';
import{createStore,applyMiddleware}from'redux';
//apllying middleware "thunk"
const store=createStore(reducer,applyMiddleware(thunk))
    ReactDOM.render(
        //provider using above created store
        <Provider store={store}>
            <App/>
        </Provider>,
    document.getElementById('root'))
