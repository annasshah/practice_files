import { Button, CircularProgress, Input, Paper, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,database, onChildAdded, child, ref, push, update, set, onValue, remove  } from '../firebase'



export const Login = () => {

  const navigate = useNavigate()

    const [signupData, setSignupData] = useState({})
    const [loading, setLoading] = useState(true)

    const state = useSelector(state=>state.authReducer)

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

        signInWithEmailAndPassword(auth, signupData.email, signupData.password)
        .then((success) => {
          // Signed in
          let userUid = success.user.uid;
          let reference = ref(database, `users/${userUid}/profile`)
          onValue(reference, (snapshot) => {
            // setUserName(snapshot.val().)
            // setUserName(snapshot.val().username);
          e.target.reset()
        })
        
        .catch((error) => {
            console.log(error)
        });
    })
  }



  useEffect(() => {
    if(!state.auth){
      setLoading(state.isLoading)
    }
    else{
      navigate('/')
    }
    
  }, [state])
  
  


  


  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      sx={{ minHeight: '90vh' }}
      >
        {loading ?  <CircularProgress size={70} /> :
      <Paper
        sx={{ width: '300px', py: 4 }}
        children={<form onSubmit={(e)=>onSubmitHandle(e)}>
          <Stack spacing={3} alignItems='center'>
            <Typography variant='h4'>Login</Typography>
            
              <Stack direction='row'>
                <Input placeholder='Enter email'  id='email' onChange={(e)=>setInputData(e)}/>
              </Stack>
              <Stack direction='row'>
                <Input placeholder='Enter password' id='password' onChange={(e)=>setInputData(e)} />
              </Stack>
              <Stack>
                <Button type='submit'>Login</Button>
              </Stack>

              <Stack direction='row' spacing={1}>
               <Typography>Don't have account </Typography> <Typography style={{color:'blue'}} onClick={()=>navigate('/signup')}> Register Now</Typography>
              </Stack>
            
          </Stack></form>
        }
      />}

    </Stack>
  )
}
