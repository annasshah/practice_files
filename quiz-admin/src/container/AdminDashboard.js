import { Container } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { auth,database,push,child,ref,set,onAuthStateChanged } from '../config/firebaseConfig'
import { useNavigate } from 'react-router'

export default function AdminDashboard() {

    const navigate = useNavigate()


    const [question, setQuestion] = useState()

    const [option01, setOption01] = useState()
    const [option02, setOption02] = useState()
    const [option03, setOption03] = useState()

    const [correctAnswer, setCorrectAnswer] = useState()

    
    let handleSubmit = (e) => {
        e.preventDefault()

        let obj = {
            question,
            options:[option01,option02,option03],
            correctAnswer
        }

     
        
        const newQuestionKey = push(child(ref(database), 'Questions/')).key
        obj.newQuestionKey = newQuestionKey

        set(ref(database, 'Questions/' + newQuestionKey), obj)
          .then(() => {
            console.log('Question Successfully Uploaded');
        })
        .catch((error) => {
              console.log('Error',error.message);
          });
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/adminlogin')
            }
        })
    
    }, [])




    return (
        <Container>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input placeholder='Enter Question' onChange={(e) => setQuestion(e.target.value)} />
                <hr />

                <input placeholder='Enter Option 01' onChange={(e) => setOption01(e.target.value)} />
                <input placeholder='Enter Option 02' onChange={(e) => setOption02(e.target.value)} />
                <input placeholder='Enter Option 03' onChange={(e) => setOption03(e.target.value)} />

                <hr />

                <input placeholder='Enter Correct Answer' onChange={(e) => setCorrectAnswer(e.target.value)} />

                <hr />

                <button type='submit'>Submit Question</button>
            </form>

            <p>See previous question <button onClick={()=>navigate('/')}>Click Here</button></p>

        </Container>
    )
}
