import React from 'react'
import { Paper, Stack, Typography, TextField, Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth, createUserWithEmailAndPassword } from '../config/firebase-initialize'
import { useNavigate } from 'react-router'


export default function Signup() {
    const navigate = useNavigate()


    let signup = (e) => {
        e.preventDefault()
        let username = e.target.username.value
        let email = e.target.email.value
        let password = e.target.password.value

        let obj = {
            email,
            password,
            username
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then((success) => {
                // Signed in 
                console.log('User successfully created', success);
                // ...
            })
            .catch((error) => {
                console.log('User not created', error);
            });


        console.log(obj);


        e.target.reset()



    }

    return (

        <Stack justifyContent='center' alignItems='center' direction='column' sx={{ width: '100%', height: '90vh' }}>

            <Paper square elevation={0} sx={{ py: 4, px: 1, border: '1px solid #d3d3d3' }} children={
                <Stack alignItems='center' spacing={2} direction='column'
                    component="form"
                    sx={{
                        '& > :not(style)': { width: '30ch' },
                    }}
                    noValidate
                    autoComplete="off"

                    onSubmit={(e) => signup(e)}
                >
                    <Typography
                        sx={{ fontWeight: 'bold' }}


                        variant='h5'>
                        SIGN UP
                    </Typography>

                    <TextField
                        // id="outlined-basic"
                        type='text' name='username' label="Username" variant="outlined" />



                    <TextField
                        // id="outlined-basic"

                        name='email' type='email' label="Email" variant="outlined" />
                    <TextField
                        // id="outlined-basic"

                        name='password' type='password' label="Password" variant="outlined" />
                    <Button type='submit'
                        fullWidth size='large' variant="contained">Sign up</Button>


                    <Stack spacing={1} direction='row' justifyContent='center' alignItems='center'>
                        <Typography>Already have account </Typography>
                        <Typography color='primary' sx={{ cursor: 'pointer', textDecoration:'underline' }} onClick={()=>navigate('/login')}>Login now</Typography>

                    </Stack>
                </Stack>
            } />

        </Stack>


    )
}

