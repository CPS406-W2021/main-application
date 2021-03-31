import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'
require('dotenv').config()

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
}

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;