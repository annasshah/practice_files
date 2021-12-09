import React from 'react'
import {Typography} from '@mui/material'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeInitialValue, changeAuthState } from '../config/redux/action/Index'

export default function Home() {
    // const state = useSelector(state => state)
    const userAuth = useSelector(state => state.userAuthReducer.authStatus)
    const userName = useSelector(state => state.initialStateReducer.username)
    // console.log(state.userAuthReducer.authStatus);
    // console.log(state.initialStateReducer.username);
    console.log(userAuth);
    console.log(userName);
    const dispatch = useDispatch()

    useEffect(() => {
        changeInitialValue(dispatch)
        changeAuthState(dispatch,true)

    }, [])


    return (
        <Typography variant='h2' align='center'>
            Home Page
        </Typography>

            
    )
}
