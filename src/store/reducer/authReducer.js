import { Redirect } from "react-router-dom";

const INIT_STATE = {
    loggedin: false,
    uid: "",
    error: "",
    registerredirect: "",
    userData: {},
};
const authReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "CLEAR_ERROR":
            return { ...state, error: "", registerredirect: "" };
        case "LOGIN_ERROR":
            return {
                ...state,
                loggedin: false,
                uid: "",
                error: action.error,
                registerredirect: "",
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                loggedin: true,
                ...action.payload,
                error: "",
                registerredirect: "",
            };

        case "LOGOUT_SUCCESS":
            return {
                ...state,
                loggedin: false,
                uid: "",
                error: "",
                useData: {},
                registerredirect: "",
            };
        case "LOGOUT_FAILURE":
            alert(action.error);
            return {
                ...state,
                loggedin: true,
                error: action.error,
                registerredirect: "",
            };
        case "REGISTERATION_COMPLETE":
            alert("Registration Successful!");
            return {
                ...state,
                error: "",
                registerredirect: <Redirect to="/login"></Redirect>,
            };
        case "REGISTERATION_ERROR":
            alert("REGISTERATION_ERROR!");
            return {
                ...state,
                error: action.error,
                registerredirect: "",
            };
        case "RESET_PASS_SUCCESS":
            alert("Password Reset Link Sucessfully Sent!");
            return {
                ...state,
                error: "",
                registerredirect: <Redirect to="/"></Redirect>,
            };
        case "RESET_PASS_ERROR":
            alert(
                `Errorsending Password Reset Link Sucessfully Sent!${action.error}`
            );
            return {
                ...state,
                error: action.error,
                registerredirect: "",
            };
        case "ACCOUNT_DELETE_SUCCESS":
            alert("ACCOUNT_DELETE_SUCCESS");
            return {
                ...state,
                error: "",
                registerredirect: <Redirect to="/"></Redirect>,
            };
        case "ACCOUNT_DELETE_ERROR":
            alert("ACCOUNT_DELETE_ERROR");
            return {
                ...state,
                error: action.error,
                registerredirect: "",
            };
        case "PROFILE_UPDATE_SUCCESS":
            return {
                ...state,
                error: action.error,
                userData: { ...state["userData"], ...action.payload },
            };
        case "PROFILE_UPDATE_ERROR":
            alert(action.error);
            return {
                ...state,
                error: action.error,
            };
        case "PROFILE_DELETE_SUCCESS":
            alert("User Successfully Deleted");
            return {
                ...state,
                error: "",
                loggedin: false,
                registerredirect: <Redirect to="/"></Redirect>,
            };
        case "PROFILE_DELETE_ERROR":
            alert(`User Not Deleted:${action.error}`);
            return {
                ...state,
                error: action.error,
                registerredirect: "",
            };
        default:
            return state;
    }
};

export default authReducer;
