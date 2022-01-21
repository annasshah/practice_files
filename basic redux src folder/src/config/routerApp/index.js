import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { About } from '../../container/About'
import { Contact } from '../../container/Contact'
import { Home } from '../../container/Home'

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}
