export const signIn = (credentials) => {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({ type: 'LOGIN_SUCCESS' });
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
        firebase.createUser({email, password}, {name, username}) //Params login creds & profile info
            .then((auth) => {
                console.log(auth)
                dispatch({ type: 'REGISTERATION_COMPLETE' })
            })
            .catch((err) => {
                dispatch({ type: 'REGISTERATION_ERROR', error: err.message, })
            })
    }
};
