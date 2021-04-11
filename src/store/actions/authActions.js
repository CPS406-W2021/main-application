export const signIn = (credentials) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then((info) => {
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    uid: info.user.uid
                });
            })
            .catch((err) => {
                dispatch({
                    type: 'LOGIN_ERROR',
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
                dispatch({ type: 'LOGOUT_SUCCESS' });
            });
    };
};

export const register = ({ email, password, name, username }) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();

        // Do registeration & generate profile
        firebase.createUser({ email, password }, { name, username }) //Params login creds & profile info
            .then((auth) => {
                dispatch({ type: 'REGISTERATION_COMPLETE' })
            })
            .catch((err) => {
                dispatch({ type: 'REGISTERATION_ERROR', error: err.message, })
            })
    }
};

export const resetPassword = ({ email }) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();

        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                dispatch({ type: 'RESET_PASS_SUCCESS' });
            })
            .catch((err) => {
                dispatch({ type: 'RESET_PASS_ERROR', error: err.message });
            })
    }
};

export const deleteAccount = ({uid}) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .deleteUser(uid)
            .then(() => {
                dispatch({ type: 'ACCOUNT_DELETE_SUCCESS' });
            })
            .catch((err) => {
                dispatch({ type: 'ACCOUNT_DELETE_ERROR', error: err.message });
            })
    }
}