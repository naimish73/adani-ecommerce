// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
// import app from "../../firebase/FirebaseAuth";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBPWfxMve13iaOkmUs8EDn7Zu2UNOFzQog",
    authDomain: "adani-mooc.firebaseapp.com",
    projectId: "adani-mooc",
    storageBucket: "adani-mooc.appspot.com",
    messagingSenderId: "161778570951",
    appId: "1:161778570951:web:8799b97847da3e28e090e2",
    measurementId: "G-3DH8RPVLV2",
});

const db = firebaseApp.firestore();

export default db;
