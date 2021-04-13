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

export const register = ({ email, username, password, name, scq, sca }) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();

        let profile = {
            name,
            username,
            email,
            scq,
            sca,
            // 'securityQ': scq,
            // 'securityA': sca,
        }
        console.log(profile)
        // Do registeration & generate profile
        firebase
            .createUser({ email, password }, profile) //Params login creds & profile info
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
            })
            .catch((err) => {
                dispatch({ type: "RESET_PASS_ERROR", error: err.message });
            });
    };
};

export const deleteAccount = ({ uid }) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .deleteUser(uid)
            .then(() => {
                dispatch({ type: "ACCOUNT_DELETE_SUCCESS" });
            })
            .catch((err) => {
                dispatch({ type: "ACCOUNT_DELETE_ERROR", error: err.message });
            });
    };
};

export const updateAccount = ({ email, phone, name }) => {
    alert("updating");
    return (dispatch, getState, getFirebase) => { };
};
export const clearError = () => {
    return { type: "CLEAR_ERROR" };
};
