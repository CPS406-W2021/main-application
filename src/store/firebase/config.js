import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: 'AIzaSyD0rwdY-yeuRK-3SV8kRLRjLH2Gfmzk2Ro',
    authDomain: 'cypress-c1675.firebaseapp.com',
    projectId: 'cypress-c1675',
    storageBucket: 'cypress-c1675.appspot.com',
    messagingSenderId: '689646040251',
    appId: '1:689646040251:web:6a27ad6da125ddc8e2a59e',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.firestore()
// firebase.analytics();???


export const fbConfig = firebaseConfig;
export default firebase;
