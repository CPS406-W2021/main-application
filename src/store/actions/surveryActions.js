export const enterSurvey = (entries) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase().firestore();
        // add to survey databse
        // No need to attach user account to survey
        // [1,2,3,4,5,6] <- Sample entry
        firebase
            .collection('survey')
            .add({'answers': entries})
            .then(() => {
                dispatch({ type: "SURVEY_REGISTRATION_SUCCESSFUL" });
            })
            .catch((err) => {
                dispatch({ type: "SURVEY_REGISTRATION_ERROR" });
            })
    };
};
