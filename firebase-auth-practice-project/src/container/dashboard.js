import React, { useEffect, useState } from 'react'
import { auth, onAuthStateChanged, signOut } from "../config/firebase-initialize"
import { Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router'


export default function Dashboard() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')

useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            setEmail(user.email)
            // ...
        } else {
            // User is signed out
            // ...

            navigate('/login')
        }
    });

}, [])




    return (
        <div>
            <Stack justifyContent='center' alignItems='center' direction='column' sx={{ width: '100%', height: '90vh' }}>
                <Stack direction='column' spacing={2}>
                    <h1>
                        Dashboard
                    </h1>

                    <h3>Welcome {email}!</h3>
                    <Button variant='contained' fullWidth={false} size='medium' onClick={() => signOut(auth)}>
                        Log Out
                    </Button>
                </Stack>
            </Stack>
        </div>
    )
}
