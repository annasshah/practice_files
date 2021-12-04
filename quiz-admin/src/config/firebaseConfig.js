// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, onChildAdded, ref, set, update, child, push } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTVJIk0vIcsC6xo-x4zPKwQ1-fMx4cJsg",
    authDomain: "loginformusingfirebaseandreact.firebaseapp.com",
    databaseURL: "https://loginformusingfirebaseandreact-default-rtdb.firebaseio.com",
    projectId: "loginformusingfirebaseandreact",
    storageBucket: "loginformusingfirebaseandreact.appspot.com",
    messagingSenderId: "792548774727",
    appId: "1:792548774727:web:6a075b699cbf6a749c3262",
    measurementId: "G-ESB40B7RYR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const database = getDatabase(app)
// const analytics = getAnalytics(app);


export {
    auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,
    database, onChildAdded, ref, set, update, child, push
}

