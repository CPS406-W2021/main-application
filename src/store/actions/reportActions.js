export const createReport = ({ uid, checkUpdates, selection, information, latlong, add }) => {
    const report = { checkUpdates, selection, information, latlong, add }
    return (dispatch, getState, getFirebase) => {
        // make an entry for the report
        // ALSO make sure to associate the user, maybe firebase has a auth().getUser() or something...
        // Associate the id of the username from the database, dont care about the custom username.
        const firebase = getFirebase();

        firebase.push('reports', report) //${uid}
            .then(() => {
                console.log('done');
                dispatch({ type: 'REPORT_SUCCESS' })
            })
            .catch((err) => {
                console.log('not done');
                console.log(err.message);
                dispatch({ type: 'REPORT_ERROR', error: err.message, })
            })

        alert("reducer called");
    };
};
