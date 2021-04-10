import authReducer from "./authReducer";
import reportReducer from "./reportReducer";
import langReducer from "./langReducer";

import { combineReducers } from "redux";
// import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

export default combineReducers({
    auth: authReducer,
    report: reportReducer,
    lang: langReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});
