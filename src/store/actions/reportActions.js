export const createReport = ({
    uid,
    checkUpdates,
    selection,
    information,
    latlong,
    add,
}) => {
    let updates = ["Request Recieved"];
    const report = {
        checkUpdates,
        selection,
        information,
        latlong,
        add,
        date: Date.now(),
        updates,
        upvotes: 0,
        downvotes: 0,
    };
    return (dispatch, getState, getFirebase) => {
        // make an entry for the report
        // ALSO make sure to associate the user, maybe firebase has a auth().getUser() or something...
        // Associate the id of the username from the database, dont care about the custom username.
        const firebase = getFirebase().firestore();
        // let f = "titleOneX";
        firebase
            .collection(`reports/${uid}/reports`)
            .add(report)
            .then(() => {
                alert("W");
            })
            .catch((err) => {
                alert("L");
            });
    };
};
export const setupReport = (report) => {
    return { type: "REPORT_SETUP", payload: report };
};
export const cancelReport = () => {
    console.log("cancellign report");
    return { type: "REPORT_CANCEL" };
};
