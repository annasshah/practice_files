// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import {getDatabase,onChildAdded, child, ref, push, update, set, onValue, remove} from "firebase/database"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN2YvWr0pmpl2jd4uaOXrt3U6u9gts5pE",
  authDomain: "todolistapp2022.firebaseapp.com",
  databaseURL: "https://todolistapp2022-default-rtdb.firebaseio.com",
  projectId: "todolistapp2022",
  storageBucket: "todolistapp2022.appspot.com",
  messagingSenderId: "505350076219",
  appId: "1:505350076219:web:132eac9a1140787f96a91e"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const database = getDatabase(app)


export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,
    database, onChildAdded, child, ref, push, update, set, onValue, remove        
    }






