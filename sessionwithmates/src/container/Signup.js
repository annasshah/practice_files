import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { auth, createUserWithEmailAndPassword, onAuthStateChanged, database, onChildAdded, child, ref, push, update, set } from '../config/firebase-config'

export default function Signup() {

    const navigate = useNavigate()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()




    let handleSubmit = (e) => {
        e.preventDefault()

        let obj = {
            username,
            email,
            password,
        }

        if (!obj.username || !obj.email || !obj.password) {
            alert('Please fill the input fields!')
        }
        else {

            createUserWithEmailAndPassword(auth, obj.email, obj.password)
                .then((success) => {
                    let uid = success.user.uid
                    obj.uid = uid
                    set(ref(database, 'users/' + uid), obj)
                    // ...
                })
                .catch((error) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;

                    console.log('Error', error.message);
                    // alert('Error',error.message)
                    // ..
                });
        }
    }

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/')

            }
        })


    }, [])






    return (
        <div className='content'>
            <form onSubmit={(e) => handleSubmit(e)}>


                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Enter username' />
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter email' />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter password' />
                <button>Sign up</button>
            </form>

        </div>
    )
}
