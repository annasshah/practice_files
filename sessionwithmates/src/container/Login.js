import { auth, signInWithEmailAndPassword, onAuthStateChanged } from '../config/firebase-config'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Spinner from '../assets/Spinner'

export default function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [loading, setLoading] = useState(true)

    let handleSubmit = (e) => {
        e.preventDefault()

        let obj = {
            email,
            password
        }

        console.log(obj);

        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then((userCreditials) => {
                let uid = userCreditials.user.uid
                let mail = userCreditials.user.email
                // Signed in 
                console.log('User uid', uid, mail);
                alert('User uid', uid)
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;

                console.log('Error', error.message);
                // alert('Error',error.message)
                // ..
            });

    }

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/')

            }
            else{
                setLoading(false)
            }
            
        })


    }, [])

    return (
        <div className='content'>
            {loading ? <Spinner /> : <form onSubmit={(e) => handleSubmit(e)}>

                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter email' />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter password' />
                <button>Sign up</button>
            </form>}

        </div>
    )
}
