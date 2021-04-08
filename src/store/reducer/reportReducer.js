const initState = {
    setupreport: {},
    ready: false,
};

const reportReducer = (state = initState, action) => {
    switch (action.type) {
        case "REPORT_SETUP":
            return {
                ...state,
                ready: true,
                setupreport: action.payload,
            };
        case "CANCEL_REPORT":
            return {
                ...state,
                ...initState,
            };
        default:
            return state;
    }
};

export default reportReducer;
