import { Signup, Login, Home } from "./allRouters";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { activeUser, InActiveUser } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";
import { auth, database,ref,onValue } from "../firebase";
import { storeUserData } from "../redux/actions/userDataActions";




export const RouterApp = () => {

  const dispatch = useDispatch()

  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
          InActiveUser(dispatch)
        }
        else{
        let reference = ref(database, `users/${user.uid}/profile`)
        onValue(reference, (snapshot) => {
          storeUserData(dispatch,snapshot.val()) 
        })
        activeUser(dispatch)
      }
    })
}, [])



  return (
    <Router>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
    </Router>
  )
}
