import authReducer from "./authReducer";
import testReducer from "./testreducer";
import { combineReducers } from "redux";

// import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";
import reportReducer from "./reportReducer";

export let INIT_STATE = {};

export default combineReducers({
    auth: authReducer,
    test: testReducer,
    firebase: firebaseReducer,
    report: reportReducer,
});
