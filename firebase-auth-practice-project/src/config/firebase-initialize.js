import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut  } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCTVJIk0vIcsC6xo-x4zPKwQ1-fMx4cJsg",
  authDomain: "loginformusingfirebaseandreact.firebaseapp.com",
  projectId: "loginformusingfirebaseandreact",
  storageBucket: "loginformusingfirebaseandreact.appspot.com",
  messagingSenderId: "792548774727",
  appId: "1:792548774727:web:6a075b699cbf6a749c3262",
  measurementId: "G-ESB40B7RYR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export {auth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut }
