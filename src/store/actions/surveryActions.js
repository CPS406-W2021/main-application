export const enterSurvey = (entries) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        // add to survey databse
        // No need to attach user account to survey
        // [1,2,3,4,5,6] <- Sample entry
        console.log("called");
        dispatch({ type: "SURVEY_REGISTRATION_SUCCESSFUL" });
    };
};
