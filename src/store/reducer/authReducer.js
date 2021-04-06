import { Redirect } from 'react-router-dom';

const INIT_STATE = { loggedin: false, error: '', registerredirect: '' };
const authReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                loggedin: false,
                error: action.error,
                registerredirect: '',
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loggedin: true,
                error: '',
                registerredirect: '',
            };

        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                loggedin: false,
                error: '',
                registerredirect: '',
            };
        case 'LOGOUT_FAILURE':
            alert(action.error);
            return {
                loggedin: true,
                ...state,
                error: action.error,
                registerredirect: '',
            };
        case 'REGISTERATION_COMPLETE':
            alert('Registration Successful!');
            return {
                ...state,
                error: '',
                registerredirect: <Redirect to="/login"></Redirect>,
            };
        case 'REGISTERATION_ERROR':
            alert('REGISTERATION_ERROR!');
            return {
                ...state,
                error: action.error,
                registerredirect: '',
            };
        default:
            return state;
    }
};

export default authReducer;
