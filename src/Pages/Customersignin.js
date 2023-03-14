import React, { useState, useEffect } from 'react'
import "../Styles/styles.css"
import { useDispatch, useSelector } from 'react-redux'
import { user_signin } from '../Redux/Actions/userAction'
import { useNavigate } from 'react-router-dom'


const Customersignin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userAuth = useSelector((state) => state.userAuth)
    const {userDetail} = userAuth

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(user_signin(email, password))
    }

    useEffect(() => {
        if(userDetail){
            navigate("/udis")
        }
    }, userDetail, navigate)


  return (
    <>
        <div className='bg-dark md py-5'>
            <div className='p-5 m-5 border bg-dark text-light'>
                <form onSubmit={submitHandler}>
                    <div>
                        <p>Email:</p>
                        <input className='inp' type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='mt-3'>
                        <p>Password:</p>
                        <input className='inp' type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className='text-center'>
                        <button className='butt mt-5' type='submit' >Sign in</button>
                        <p className='mt-3'>No account? <a href='csu'>Create one here</a></p>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Customersignin