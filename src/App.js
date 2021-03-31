import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { createStore, combineReducers, compose } from "redux";
import {
    ReactReduxFirebaseProvider,
    firebaseReducer,
} from "react-redux-firebase";
import rootReducer from "./store/reducer/index";

// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//     appId: process.env.APP_ID,
// };

// // react-redux-firebase config
// const rrfConfig = {
//     userProfile: "users",
//     // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
//     // enableClaims: true // Get custom claims along with the profile
// };

// // Create store with reducers and initial state
// const initialState = {};
// // const store = createStore(rootReducer, initialState);

// // const rrfProps = {
// //     firebase,
// //     config: rrfConfig,
// //     dispatch: store.dispatch,
// //     // createFirestoreInstance // <- needed if using firestore
// // };

// // firebase.initializeApp(firebaseConfig);

import Contact from "./pages/general/Contact";
import Home from "./pages/general/Home";
import PortalBase from "./pages/portal";
import RAPBase from "./pages/reportAProblem";
import Login from "./pages/account/Login"
require("dotenv").config();
export default class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/portal">
                    <PortalBase />
                </Route>
                <Route path="/rap">
                    <RAPBase />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Router>
        );
    }
}
