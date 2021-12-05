import { Button, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { auth, onAuthStateChanged, signOut, database, onChildAdded, child, ref, push, update, set } from '../config/firebase-config'
import Spinner from '../assets/Spinner'


export default function Home() {
    // const navigate = useNavigate()



    const [loading, setLoading] = useState(true)
    const [usersData, setUsersData] = useState([])

    let arr = []



    useEffect(() => {

        onChildAdded(ref(database, 'users'), (snapshot) => {
            if (snapshot.exists()) {
                arr.push(snapshot.val())
                setUsersData([...arr])
                setLoading(false)
                console.log(usersData);

            }
        })

        // onAuthStateChanged(auth, (user) => {
        //     if (!user) {
        //         navigate('/login')

        //     }
        // });


    }, [])

    return (
        <div className='content'>
            {/* <Typography align='center' variant='h1'>Home Page</Typography>
            <Button onClick={() => signOut(auth)}>Logout</Button> */}
            {loading ? <Spinner /> : <Box>
                {usersData.map((e) => {
                    return <Box>
                        <Typography align='center' sx={{ color: 'black' }} variant='h6'>User Name: {e.username}</Typography>
                        <Typography align='center' sx={{ color: 'black' }} variant='h6'>User email: {e.email}</Typography>
                        <Typography align='center' sx={{ color: 'black' }} variant='h6'>User password: {e.password}</Typography>
                    <hr />
                    </Box>
                })}

            </Box>}

        </div>
    )
}

