import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, About, Contact, ErrorPage } from './Approuter'
import NavBarComponent from '../../components/NavBarComponent'

export default function Approuter() {
    return (
        <Router>
            <NavBarComponent />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}
