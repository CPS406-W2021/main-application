export const createReport = (report) => {
    let updates = ["Request Recieved"];
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

//Report changes as json object with the correct labels within firebase
export const editReport = ({ reportId, reportChanges }) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase().firestore();
        firebase
            .collection(`reports/`)
            .doc(reportId)
            .set(reportChanges, { merge: true })
            .then(() => {
                dispatch({ type: "REPORT_EDIT_SUCCESS" });
            })
            .catch((err) => {
                dispatch({ type: "REPORT_EDIT_ERROR", error: err.message });
            });
    };
};


export const deleteReport = (reportId) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase().firestore();
        firebase
            .collection(`reports/`)
            .doc(reportId)
            .delete()
            .then(() => {
                dispatch({ type: "REPORT_DELETED_SUCCESS" });
            })
            .catch((err) => {
                dispatch({ type: "REPORT_DELETED_ERROR", error: err.message });
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

export const upVoteReport = ({ reportId, uid }) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase().firestore();
        let upVote = { vote: 1, reportId, uid };

        //Update vote collection
        firebase
            .collection(`votes/${reportId}_${uid}`)
            .set(upVote)
            .then(() => {

                //Aggregate Data
                firebase
                    .collection('reports')
                    .doc(reportId)
                    .update({
                        votes: admin.firestore.FieldValue.increment(1)
                    }).catch((err) => {
                        dispatch({ type: "VOTE_ERROR", error: err.message });
                    });

                dispatch({ type: "VOTE_SUCCESS" });
            })
            .catch((err) => {
                dispatch({ type: "VOTE_ERROR", error: err.message });
            });
    };
}


export const downVoteReport = ({ reportId, uid }) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase().firestore();
        let downVote = { vote: -1, reportId, uid };

        //Update vote collection
        firebase
            .collection(`votes/${reportId}_${uid}`)
            .set(downVote)
            .then(() => {

                //Aggregate Data
                firebase
                    .collection('reports')
                    .doc(reportId)
                    .update({
                        votes: admin.firestore.FieldValue.increment(-1)
                    }).catch((err) => {
                        dispatch({ type: "VOTE_ERROR", error: err.message });
                    });

                dispatch({ type: "VOTE_SUCCESS" });
            })
            .catch((err) => {
                dispatch({ type: "VOTE_ERROR", error: err.message });
            });
    };
}

export const undoVoteReport = ({ reportId, uid }) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase().firestore();

        firebase
            .collection(`votes/`)
            .doc(`${reportId}_${uid}`)
            .delete()
            .then(() => {
                dispatch({ type: "UNDO_VOTE_SUCCESS" });
            })
            .catch((err) => {
                dispatch({ type: "UNDO_VOTE_ERROR", error: err.message });
            });
    };
}

export const getVotes = ({ reportId }) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase().firestore();

        firebase
            .collection('reports')
            .doc(reportId)
            .get()
            .then((report) => {
                dispatch({ type: "COUNT_VOTE_SUCCESS", total: report.votes });
            })
            .catch((err) => {
                dispatch({ type: "COUNT_VOTE_ERROR", error: err.message });
            });
    };
};