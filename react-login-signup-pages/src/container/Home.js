import { Button, CircularProgress, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth,onAuthStateChanged, signOut } from '../firebase'


export const Home = () => {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)


    const signOutHandle = () => {
        signOut(auth).then(()=>{
            navigate('/login')
        })

    }
    useEffect(() => {


        onAuthStateChanged(auth, (user) => {
            if (!user) {
              navigate('/login')
            }
            else{
              setLoading(false)
          }
        })
    }, [])


    


  return (
    <Stack justifyContent='center'
    alignItems='center'
    sx={{ minHeight: '90vh' }}>{loading ? <CircularProgress /> : <Stack><Typography align='center' variant='h3' sx={{fontWeight:'bold'}}>Home</Typography>
    <Stack alignItems='center' ><Button onClick={signOutHandle}>Signout</Button></Stack></Stack>}</Stack>
  )
}
