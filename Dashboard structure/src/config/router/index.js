import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'

import { Dashboard } from '../../container/Dashboard'
import Home from '../../container/Home'

export default function RouterApp () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
      </Routes>
    </Router>
  )
}
