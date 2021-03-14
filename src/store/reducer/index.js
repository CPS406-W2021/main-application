import { combineReducers } from "redux";
import testReducer from "./testreducer";

export let INIT_STATE = {};

export default combineReducers({
    test: testReducer,
});
