import { Redirect } from 'react-router-dom';

const INIT_STATE = { error: '', };

const reportReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'REPORT_ERROR':
            return {
                ...state,
                error: action.error,
            };
        case 'REPORT_SUCCESS':
            return {
                ...state,
                error: '',
            }
        default:
            return state;
    }
}

export default reportReducer;