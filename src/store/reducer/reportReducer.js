const INIT_STATE = { error: "", setupreport: {}, ready: false };

const reportReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "REPORT_ERROR":
            return {
                ...state,
                error: action.error,
            };
        case "REPORT_SUCCESS":
            return {
                ...state,
                error: "",
            };
        case "REPORT_SETUP":
            return {
                ...state,
                ready: true,
                setupreport: action.payload,
            };
        case "REPORT_CANCEL":
            return {
                ...state,
                ...INIT_STATE,
            };
        case "VOTE_SUCCESS":
            alert("W");
            return {
                ...state,
                error: "",
            };
        case "VOTE_ERROR":
            alert("VOTE ERROR");
            return {
                ...state,
                error: action.error,
            };
        case "UNDO_VOTE_SUCCESS":
            return {
                ...state,
                error: "",
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
            };
        case "COUNT_VOTE_ERROR":
            return {
                ...state,
                total: "",
                error: action.error,
            };
        case "REPORT_EDIT_SUCCESS":
            return {
                ...state,
                error: "",
            };
        case "REPORT_EDIT_ERROR":
            return {
                ...state,
                error: action.error,
            };
        case "REPORT_DELETE_SUCCESS":
            return {
                ...state,
                error: "",
            };
        case "REPORT_DELETE_ERROR":
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
};

export default reportReducer;
