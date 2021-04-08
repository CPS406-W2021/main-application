import authReducer from "./authReducer";
import testReducer from "./testreducer";
import { combineReducers } from "redux";
import { combineReducers } from 'redux';

// import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";
import reportReducer from "./reportReducer";

export default combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
    report: reportReducer,
});
