import React, { useState, useEffect } from 'react'
import "../Styles/styles.css"
import { useDispatch, useSelector } from 'react-redux'
import { admin_signin } from '../Redux/Actions/Adminaction'
import { useNavigate } from 'react-router-dom'

const Adminsignin = () => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const adminAuth = useSelector((state) => state.adminAuth)
    const {adminDetail} = adminAuth

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(admin_signin(email, password))
    }

    useEffect(() => {
        if(adminDetail){
            navigate("/adis")
        }
    }, adminDetail, navigate)


  return (
    <>
        <div className='p-5 m-5 border bg-dark text-light'>
            <p className='text-center admin'>ADMIN</p>
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
                    <button className='butt mt-5' type='submit'>Sign in</button>
                    <p className='mt-3'>No account? <a href='/asu'>Create one here</a></p>
                </div>
            </form>
        </div>
    </>
  )
}

export default Adminsignin