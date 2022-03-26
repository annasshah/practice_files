import { Button, CircularProgress, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth,database,onAuthStateChanged, signOut,onValue,ref } from '../firebase'
import { activeUser, InActiveUser } from '../redux/actions/authActions'
import { ACTIVE_USER_AUTH } from '../redux/constants/auth_constants'


export const Home = () => {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState(null)


    const authState = useSelector(state=>state.authReducer)
    const userDataState = useSelector(state=>state.userDataReducer)
    console.log(userDataState)

    const dispatch = useDispatch()





    const signOutHandle = () => {
        signOut(auth).then(()=>{
          InActiveUser(dispatch)
        })
    }


    useEffect(() => {
      if(authState.auth){
        setLoading(authState.isLoading)
      }
      else{
        navigate('/login')
      }
      
    }, [authState])

    
    useEffect(() => {
      if(!userDataState.isLoading){
        setUserData(userDataState.userData)
      }
      
    }, [userDataState])
    







  return (
    <Stack justifyContent='center'
    alignItems='center'
    sx={{ minHeight: '90vh' }}>{loading ? <CircularProgress /> : <Stack><Typography align='center' variant='h3' sx={{fontWeight:'bold'}}>Home</Typography>

    {!userData ? <Stack justifyContent='center' alignItems='center' ><CircularProgress size={30} /></Stack> : <Stack>
      <Typography align='center'>Username: {userData?.username}</Typography>
      <Typography align='center'>Email: {userData?.email}</Typography>
      <Typography align='center'>password: {userData?.password}</Typography>
      
      </Stack>}


    <Stack alignItems='center' ><Button onClick={signOutHandle}>Signout</Button></Stack></Stack>}</Stack>
  )
}

