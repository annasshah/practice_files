import { Button, CircularProgress, Input, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,database, onChildAdded, child, ref, push, update, set, onValue, remove  } from '../firebase'






export const Signup = () => {


    const navigate = useNavigate()


    const [signupData, setSignupData] = useState({})
    const [loading, setLoading] = useState(true)


    const setInputData = (e) =>{
        const id = e.target.id
        const val = e.target.value

        const obj = {
            ...signupData,
            [id]:val
        }
        
        setSignupData(obj)
    }
    
    
    
    const onSubmitHandle = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, signupData.email, signupData.password)
        .then((success) => {
          // Signed in
          let userUid = success.user.uid;
          let reference = ref(database, `users/${userUid}/profile`)
          set(reference, signupData)
          e.target.reset()
        })
        .catch((error) => {
            console.log(error)
        });
    }



      useEffect(() => {


    onAuthStateChanged(auth, (user) => {
        if (user) {
          navigate('/')
        }
        else{
            setLoading(false)
        }
    })



}, [])




  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      sx={{ minHeight: '90vh' }}
    >
    {loading ?  <CircularProgress /> :
      <Paper
        sx={{ width: '300px', py: 4 }}
        children={<form onSubmit={(e)=>onSubmitHandle(e)}>
          <Stack spacing={3} alignItems='center'>
            <Typography variant='h4'>Sign up</Typography>
            
              <Stack direction='row'>
                <Input placeholder='Enter username ' id='username' onChange={(e)=>setInputData(e)} />
              </Stack>
              <Stack direction='row'>
                <Input placeholder='Enter email'  id='email' onChange={(e)=>setInputData(e)}/>
              </Stack>
              <Stack direction='row'>
                <Input placeholder='Enter password' id='password' onChange={(e)=>setInputData(e)} />
              </Stack>
              <Stack>
                <Button type='submit'>Sign up</Button>
              </Stack>
            
          </Stack></form>
        }
      /> }
    </Stack>
  )
}
