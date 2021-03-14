export const doTest = (t) => {
    return (dispatch, getState) => {
        // make async call to database
        dispatch({ type: "DO_TEST", t });
    };
};
