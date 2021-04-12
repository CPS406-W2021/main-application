const INIT_STATE = {
    error: "",
    setupreport: {},
    ready: false,
    loadedreport: { loaded: false },
};

const reportReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "REPORT_ERROR":
            return {
                ...state,
                error: action.error,
                loadedreport: { loaded: false },
            };
        case "REPORT_SUCCESS":
            return {
                ...state,
                error: "",
                loadedreport: { loaded: false },
            };
        case "REPORT_SETUP":
            return {
                ...state,
                ready: true,
                setupreport: action.payload,
                loadedreport: { loaded: false },
            };
        case "REPORT_CANCEL":
            return {
                ...state,
                ...INIT_STATE,
                loadedreport: { loaded: false },
            };
        case "VOTE_SUCCESS":
            // alert("W");
            return {
                ...state,
                error: "",
                loadedreport: { loaded: false },
            };
        case "VOTE_ERROR":
            alert(action.error);
            return {
                ...state,
                error: action.error,
                loadedreport: { loaded: false },
            };
        case "UNDO_VOTE_SUCCESS":
            return {
                ...state,
                error: "",
                loadedreport: { loaded: false },
            };
        case "UNDO_VOTE_ERROR":
            return {
                ...state,
                error: action.error,
            };
        case "COUNT_VOTE_SUCCESS":
            return {
                ...state,
                total: action.total,
                error: "",
                loadedreport: { loaded: false },
            };
        case "COUNT_VOTE_ERROR":
            return {
                ...state,
                total: "",
                error: action.error,
                loadedreport: { loaded: false },
            };
        case "REPORT_EDIT_SUCCESS":
            return {
                ...state,
                loadedreport: { loaded: false },
                error: "",
            };
        case "REPORT_EDIT_ERROR":
            return {
                ...state,
                error: action.error,
                loadedreport: { loaded: false },
            };
        case "REPORT_DELETE_SUCCESS":
            return {
                ...state,
                error: "",
                loadedreport: { loaded: false },
            };
        case "REPORT_DELETE_ERROR":
            return {
                ...state,
                error: action.error,
                loadedreport: { loaded: false },
            };
        case "REPORT_LOADED":
            return {
                ...state,
                loadedreport: action.payload,
            };
        default:
            return state;
    }
};

export default reportReducer;
