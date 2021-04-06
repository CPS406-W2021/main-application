export const createReport = ({ uid, checkUpdates, selection, information, latlong, add }) => {
    return (dispatch, getState, getFirebase) => {
        // make an entry for the report
        // ALSO make sure to associate the user, maybe firebase has a auth().getUser() or something...
        // Associate the id of the username from the database, dont care about the custom username.
        const firebase = getFirebase();
        const report = { checkUpdates, selection, information, latlong, add }
        
        firebase.push(`Reports`, report) //${uid}
        .then((auth) => {
            dispatch({ type: 'REPORT_COMPLETE' })
        })
        .catch((err) => {
            dispatch({ type: 'REPORT_ERROR', error: err.message, })
        })

        alert("reducer called");
    };
};
