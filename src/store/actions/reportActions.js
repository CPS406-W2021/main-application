export const createReport = ({
    uid,
    checkUpdates,
    selection,
    information,
    latlong,
    add,
}) => {
    const report = { checkUpdates, selection, information, latlong, add };
    return (dispatch, getState, getFirebase) => {
        // make an entry for the report
        // ALSO make sure to associate the user, maybe firebase has a auth().getUser() or something...
        // Associate the id of the username from the database, dont care about the custom username.
        const firebase = getFirebase().firestore();
        let f = "titleOneX";
        firebase
            .collection("reports")
            .add(report)
            .then(() => {
                alert("W");
            })
            .catch((err) => {
                alert("L");
            });
    };
};
export const cancelReport = () => {
    return { type: "REPORT_CANCEL" };
};
