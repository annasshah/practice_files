import { Button, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { auth, onAuthStateChanged, signOut, database, onChildAdded, ref } from '../config/firebase-config'
import Spinner from '../assets/Spinner'
import { useSelector } from 'react-redux'
import {userDataFromDatabase} from '../config/redux/action'
import { useDispatch } from 'react-redux'




export default function GetData() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // const [apiData, setApiData] = useState()

   const state = useSelector((state) => state)
    console.log(state.questionsReducer);

    useEffect(() => {

        
        // console.log(state);

        let arr = []
        onChildAdded(ref(database, 'users'), (snapshot) => {
            if (snapshot.exists()) {
                arr.push(snapshot.val())
                // setUsersData([...arr])
                // setLoading(false)

            }
            userDataFromDatabase(dispatch,arr)

        })

        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/login')

            }
        });


    }, [])






    return (
        <div className='content'>
            <h1>Get Data</h1>

            {/* {loading ? <Spinner /> : <Box>
                {state.data.results.map((e,i) => {
                    return <Box key={i}>
                        <Typography align='center' sx={{ color: 'black' }} variant='h6'>Question0{i+1}: {e.question}</Typography>
                    <hr />
                    </Box>
                })}

            </Box>} */}
        </div>
    )
}
