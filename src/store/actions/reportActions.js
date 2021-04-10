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
        let upVote = { vote: 1, reportId };

        firebase
            .collection(`votes/${reportId}_${uid}`)
            .set(upVote)
            .then(() => {
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
        let downVote = { vote: -1, reportId };

        firebase
            .collection(`votes/${reportId}_${uid}`)
            .set(downVote)
            .then(() => {
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
        let totalVotes = 0;

        firebase
            .collection(`votes/`)
            .where('reportId', '==', reportId)
            .get()
            .then((allVotes) => {
                allVotes.forEach(vote => {
                    totalVotes += vote.vote;
                });
                dispatch({ type: "COUNT_VOTE_SUCCESS", total: totalVotes });
            })
            .catch((err) => {
                dispatch({ type: "COUNT_VOTE_ERROR", error: err.message });
            });
    };
};