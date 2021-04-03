import React from 'react';

// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

// Redux Thunk for async reducers
import thunk from 'redux-thunk';
// Redux & Firebase
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

// All Reducers
import rootReducer from '../reducer/index';

// Firebase
import fb from './config';

let SetupFirebase = ({ children }) => {
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(thunk.withExtraArgument(getFirebase))),
    );

    const rrfConfig = {
        userProfile: 'users', // where profiles are stored in database
        presence: 'presence', // where list of online users is stored in database
        sessions: 'sessions', // where list of user sessions is stored in database (presence must be enabled)
        useFirestoreForProfile: true,
    };

    const rrfProps = {
        firebase: fb,
        config: rrfConfig,
        dispatch: store.dispatch,
        createFirestoreInstance, // <- needed if using firestore
    };

    return (
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>{children}</ReactReduxFirebaseProvider>
        </Provider>
    );
};
export default SetupFirebase;
