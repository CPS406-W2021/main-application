export const createReport = (user, report) => {
    return (dispatch, getState, getFirebase) => {
        // make an entry for the report
        // ALSO make sure to associate the user, maybe firebase has a auth().getUser() or something...
        // Associate the id of the username from the database, dont care about the custom username.
        const firebase = getFirebase();
        const { checkUpdates, selection, information, latlong, add } = report;
        alert("reducer called");
        console.log(report);
    };
};
