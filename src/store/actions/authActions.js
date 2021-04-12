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
export const updateAccount = ({ userId, profileChanges }) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase().firestore();

        firebase
            .collection("users")
            .doc(userId)
            .set(profileChanges, { merge: true })
            .then(() => {
                dispatch({ type: "PROFILE_UPDATE_SUCCESS" });
            })
            .catch((err) => {
                dispatch({ type: "PROFILE_UPDATE_ERROR", error: err.message });
            });
    };
};

export const deleteAccount = () => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        const firestore = firebase.firestore();
        const STATE = getState();
        if (STATE.auth.loggedin) {
            console.log(firebase.auth().currentUser.uid);
            firestore
                .collection("users")
                .doc(firebase.auth().currentUser.uid)
                .delete()
                .then(() => {
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
