export const signIn = (credentials) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        const firestore = firebase.firestore();
        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then((info) => {
                firestore
                    .collection("users")
                    .doc(info.user.uid)
                    .get()
                    .then((doc) => {
                        const data = doc.data();
                        dispatch({
                            type: "LOGIN_SUCCESS",
                            payload: { uid: info.user.uid, userData: data },
                        });
                    })
                    .catch((err) => {
                        dispatch({
                            type: "LOGIN_ERROR",
                            error: err.message,
                        });
                    });
            })
            .catch((err) => {
                dispatch({
                    type: "LOGIN_ERROR",
                    error: err.message,
                });
            });
    };
};

export const signOut = () => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({ type: "LOGOUT_SUCCESS" });
            });
    };
};

export const register = ({ email, password, name, username, scq, sca }) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        console.log(scq);
        console.log(sca);
        // Do registeration & generate profile
        firebase
            .createUser(
                { email, password },
                { email, name, username, scq, sca }
            ) //Params login creds & profile info
            .then((auth) => {
                dispatch({ type: "REGISTERATION_COMPLETE" });
            })
            .catch((err) => {
                dispatch({ type: "REGISTERATION_ERROR", error: err.message });
            });
    };
};

export const resetPassword = (email = null) => {
    return async (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        const STATE = getState();
        if (STATE.auth.loggedin) {
            email = firebase.auth().currentUser.email;
        }
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                dispatch({ type: "RESET_PASS_SUCCESS" });
            });
    };
};

//userId and then a object of only changes.
export const updateAccount = (email, name) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        const firestore = firebase.firestore();
        const STATE = getState();

        if (STATE.auth.loggedin) {
            firestore
                .collection("users")
                .doc(firebase.auth().currentUser.uid)
                .set({ email, name }, { merge: true })
                .then(() => {
                    console.log("updated the user...");
                    firebase
                        .auth()
                        .currentUser.updateEmail(email)
                        .then(() => {
                            console.log("updated the user info");
                            dispatch({
                                type: "PROFILE_UPDATE_SUCCESS",
                                payload: { email, name },
                            });
                        });
                })
                .catch((err) => {
                    dispatch({
                        type: "PROFILE_UPDATE_ERROR",
                        error: err.message,
                    });
                });
        }
    };
};

export const deleteAccount = () => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        const firestore = firebase.firestore();
        const STATE = getState();

        //delete user profile
        firestore
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .delete()
            // .then(() => {
            //     dispatch({ type: "PROFILE_DELETE_SUCCESS" });
            // })
            .catch((err) => {
                dispatch({
                    type: "PROFILE_DELETE_ERROR",
                    error: err.message,
                });
            })
            .then(() => {

                //delete all reports by user
                firestore
                    .collection('reports')
                    .where('uid', '==', firebase.auth().currentUser.uid)
                    .get()
                    .then((reports) => {
                        var batch = firestore.batch()

                        reports.forEach(report => {
                            batch.delete(report.ref)
                        });

                        return batch.commit();
                    })
                    .catch((err) => {
                        dispatch({
                            type: "PROFILE_DELETE_ERROR",
                            error: err.message,
                        });
                    })
                    .then(() => {
                        //delete user
                        if (STATE.auth.loggedin) {
                            firebase
                                .auth()
                                .currentUser.delete()
                                .then(() => { })
                                .catch((err) => {
                                    dispatch({
                                        type: "PROFILE_DELETE_ERROR",
                                        error: err.message,
                                    });
                                });
                        }
                        dispatch({ type: "PROFILE_DELETE_SUCCESS" });
                    })
            });
    };
};

export const clearError = () => {
    return { type: "CLEAR_ERROR" };
};
