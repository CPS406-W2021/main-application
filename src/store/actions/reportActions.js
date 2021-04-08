export const createReport = ({
    uid,
    checkUpdates,
    selection,
    information,
    latlong,
    add,
}) => {
    let updates = ['Request Recieved'];
    const report = { uid, checkUpdates, selection, information, latlong, add, date: Date.now(), updates, 'upvotes': 0, 'downvotes': 0 };
    return (dispatch, getState, getFirebase) => {
        // make an entry for the report
        // ALSO make sure to associate the user, maybe firebase has a auth().getUser() or something...
        // Associate the id of the username from the database, dont care about the custom username.
        const firebase = getFirebase().firestore();
        // let f = "titleOneX";
        firebase
            .collection('reports') //`reports/${uid}/reports`
            .add(report)
            .then(() => {
                dispatch({
                    type: 'REPORT_SUCCESS'
                })
            })
            .catch((err) => {
                dispatch({
                    type: 'REPORT_ERROR',
                    error: err.message
                })
            });
    };
};
