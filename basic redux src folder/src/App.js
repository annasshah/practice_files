import { Typography } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import { Provider, useSelector } from 'react-redux'
import { AppRouter } from '../src/config/routerApp/index'
import store from './config/redux/store/index'
import './App.css'

function App () {
 
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  )
}

export default App
