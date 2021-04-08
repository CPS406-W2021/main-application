export const setupReport = (report) => {
    return (dispatch) => {
        // report:{lat,long, name}
        dispatch({ type: "REPORT_SETUP", payload: report });
    };
};
export const cancelReport = () => {
    return { type: "REPORT_CANCEL" };
};
