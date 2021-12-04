import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "../container/AdminDashboard";
import AdminLogin from "../container/AdminLogin";
import ErrorPage from "../container/ErrorPage";
import RenderQuestions from "../container/RenderQuestions";

export default function RouterApp() {
    return (
        <Router>
            <Routes>

                <Route path='/' element={<RenderQuestions />} />
                <Route path='/admin' element={<AdminDashboard />} />
                <Route path='/adminlogin' element={<AdminLogin />} />
                <Route path='*' element={<ErrorPage />} />

            </Routes>
        </Router>
    )
}
