import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Home,About,Contact,ErrorPage} from ".";

import NavBar from "../components/NavBar";

export default function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path='/'  element={<Home/>} />
            <Route path='/about'  element={<About/>} />
            <Route path='/contact'  element={<Contact/>} />
            <Route path='*'  element={<ErrorPage/>} />

        </Routes>
        <NavBar/>
    </Router>
  );
}