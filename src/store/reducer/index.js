import authReducer from "./authReducer";
import reportReducer from "./reportReducer";

import { combineReducers } from "redux";
// import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";
export default combineReducers({
    auth: authReducer,
    report: reportReducer,
    firebase: firebaseReducer,
});
