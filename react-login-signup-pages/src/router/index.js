import { Signup, Login, Home } from "./allRouters";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




export const RouterApp = () => {
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
