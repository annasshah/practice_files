import { initializeApp } from "firebase/app";
// Authentication 
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
//Database
import {getDatabase, onChildAdded, child, ref, push, update, set} from "firebase/database";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIzIlzX-dSD3mO6737ROamI7xkk04gElc",
  authDomain: "sessionwithusman.firebaseapp.com",
  projectId: "sessionwithusman",
  storageBucket: "sessionwithusman.appspot.com",
  messagingSenderId: "752683045734",
  appId: "1:752683045734:web:ce88aacacfc72d25262ea7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const database = getDatabase(app)

export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,
  database,onChildAdded, child, ref, push, update, set
}



