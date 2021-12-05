import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../container/Home'
import Login from '../container/Login'
import Signup from '../container/Signup'
import ErrorPage from '../container/ErrorPage'

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </Router>
    )
}
