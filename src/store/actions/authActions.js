export const signIn = (credentials) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then((info) => {
                dispatch({
                    type: "LOGIN_SUCCESS",
                    uid: info.user.uid,
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

export const register = ({ email, password, name, username }) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();

        // Do registeration & generate profile
        firebase
            .createUser({ email, password }, { email, name, username }) //Params login creds & profile info
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
export const updateAccount = (profileChanges) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        const firestore = firebase.firestore();
        const STATE = getState();
        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        if (
            profileChanges["email"] === "" ||
            !validateEmail(profileChanges["email"])
        ) {
            delete profileChanges["email"];
        }
        if (profileChanges["name"] === "") {
            delete profileChanges["name"];
        }
        if (profileChanges["address"] === "") {
            delete profileChanges["address"];
        }
        alert(JSON.stringify(`NEW UPDATE:${profileChanges}`));
        if (STATE.auth.loggedin) {
            firestore
                .collection("users")
                .doc(firebase.auth().currentUser.uid)
                .set(profileChanges, { merge: true })
                .then(() => {
                    dispatch({ type: "PROFILE_UPDATE_SUCCESS" });
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
        const uid = firebase.auth().currentUser.uid
        if (STATE.auth.loggedin) {
            firebase
                .auth()
                .currentUser
                .delete()
                .then(() => {
                    firestore
                        .collection("users")
                        .doc(uid)
                        .delete()
                        .catch((err) => {
                            dispatch({
                                type: "PROFILE_DELETE_ERROR",
                                error: err.message,
                            });
                        });
                    dispatch({ type: "PROFILE_DELETE_SUCCESS" });
                })
                .catch((err) => {
                    dispatch({
                        type: "PROFILE_DELETE_ERROR",
                        error: err.message,
                    });
                });
        }
    };
};

export const clearError = () => {
    return { type: "CLEAR_ERROR" };
};
