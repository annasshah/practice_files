import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { database, onChildAdded, ref, auth, onAuthStateChanged } from '../config/firebaseConfig'
import Spinner from '../assets/Spinner'
import { Box } from '@mui/system';
import { useNavigate } from 'react-router';


export default function RenderQuestions() {
    const navigate = useNavigate()

    const [Ques, setQues] = useState([])
    const [loading, setLoading] = useState(true)



    let refrence = ref(database, "Questions/")

    let arr = [];

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/adminlogin')
            }
        })

    }, [])


    useEffect(() => {

        onChildAdded(refrence, (snapshot) => {
            if (snapshot.exists()) {
                arr.push(snapshot.val());
                setQues([...arr]);
                setLoading(false)
            }
        });

    }, [])



    return (
        <Container>
            
            {loading ? <Spinner /> : <Box>
                <p>Add new Question <button onClick={()=>navigate('/admin')}>Click Here</button></p>
                {
                    Ques.map((e, i) => {
                        return <div>
                            <h1>Q{i + 1}: {e.question}</h1>
                            {e.options.map((opt, ind) => {
                                return <h4>option 0{ind + 1}: {opt}</h4>
                            })}


                            <h4>Correct Answer: {e.correctAnswer}</h4>

                            <hr />

                        </div>
                    })
                }
            </Box>
            }

            {/* <Spinner /> */}

        </Container>
    )
}
