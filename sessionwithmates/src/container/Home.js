import { Button, Typography, Box } from '@mui/material'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { auth, onAuthStateChanged, signOut, database, onChildAdded, ref} from '../config/firebase-config'
import Spinner from '../assets/Spinner'
import {useSelector} from 'react-redux' 
import getData from '../config/redux/action'
import { useDispatch } from 'react-redux'



export default function Home() {
    const navigate = useNavigate()
   const dispatch = useDispatch()


   const [apiData, setApiData] = useState()

    let obj = {
        type:'STOREDATA',
        newData:'newdata'
    }

    // storeData(dispatch, obj)



   const state = useSelector((state) => state)
   
//    console.log(state.data.results[0]);




    const [loading, setLoading] = useState(true)
    const [usersData, setUsersData] = useState([])

    let arr = []



    useEffect(() => {

        // getData(dispatch,obj)
        // console.log(state);

        onChildAdded(ref(database, 'users'), (snapshot) => {
            if (snapshot.exists()) {
                arr.push(snapshot.val())
                setUsersData([...arr])
                setLoading(false)

            }
        })

        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/login')

            }
        });


    }, [])


   



    return (
        <div className='content'>
            <Typography align='center' variant='h1'>Home Page</Typography>
            <Button onClick={() => signOut(auth)}>Logout</Button>
            {/* {loading ? <Spinner /> : <Box>
                {usersData.map((e,i) => {
                    return <Box key={i}>
                        <Typography align='center' sx={{ color: 'black' }} variant='h6'>User Name: {e.username}</Typography>
                        <Typography align='center' sx={{ color: 'black' }} variant='h6'>User email: {e.email}</Typography>
                        <Typography align='center' sx={{ color: 'black' }} variant='h6'>User password: {e.password}</Typography>
                    <hr />
                    </Box>
                })}

            </Box>} */}

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

 // {
    //     "category": "General Knowledge",
    //     "type": "boolean",
    //     "difficulty": "medium",
    //     "question": "The average woman is 5 inches / 13 centimeters shorter than the average man.",
    //     "correct_answer": "True",
    //     "incorrect_answers": [
    //         "False"
    //     ]
    // }




