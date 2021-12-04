import {useEffect} from 'react'
import { Paper, Stack, Typography, TextField, Button } from '@mui/material';
import { auth, signInWithEmailAndPassword, onAuthStateChanged } from '../config/firebaseConfig';
import { useNavigate } from 'react-router'

export default function AdminLogin() {

    const navigate = useNavigate()

    let login = (e) => {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value

        let obj = {
            email,
            password
        }

        console.log(obj);

        signInWithEmailAndPassword(auth, email, password)
            .then((success) => {
                // Signed in 
                console.log('User successfully login', success);
                // ...
            })
            .catch((error) => {
                console.log('User not login', error);
            });
        e.target.reset()
    }



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/')
            }
        })
    
    }, [])





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

                    onSubmit={login}
                >
                    <Typography align='center'
                        sx={{ fontWeight: 'bold' }}
                        variant='h5'>
                        Admin login
                    </Typography>
                    <TextField
                        // id="outlined-basic"
                        type='email' name='email' label="Email" variant="outlined" />
                    <TextField
                        // id="outlined-basic"
                        type='password' name='password' label="Password" variant="outlined" />
                    <Button type='submit'
                        fullWidth size='large' variant="contained">Login</Button>


                    <Stack spacing={1} direction='row' justifyContent='center' alignItems='center'>
                        <Typography>Don't have account </Typography>
                        <Typography color='primary' sx={{cursor:'pointer',textDecoration:'underline'}} onClick={()=>navigate('/signup')}>sign up now</Typography>

                    </Stack>
                </Stack>
            } />



        </Stack>
    )
}