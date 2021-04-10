export const createReport = (report) => {
    // let updates = ["Request Recieved"];
    return (dispatch, getState, getFirebase) => {
        // make an entry for the report
        // ALSO make sure to associate the user, maybe firebase has a auth().getUser() or something...
        // Associate the id of the username from the database, dont care about the custom username.
        const firebase = getFirebase().firestore();
        // let f = "titleOneX";
        firebase
            .collection(`reports/`)
            .add(report)
            .then(() => {
                dispatch({ type: "REPORT_CANCEL" });
            })
            .catch((err) => {
                console.log(err);
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
