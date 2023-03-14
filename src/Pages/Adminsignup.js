import React, { useEffect, useState } from 'react'
import { admin_signup } from '../Redux/Actions/Adminaction'
import { useDispatch, useSelector } from 'react-redux'
import { ADMIN_SIGN_UP_RESET } from '../Redux/Types'
import { useNavigate } from 'react-router-dom'

const Adminsignup = () => {

    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [postCode, setPostCode] = useState("")
    const [sector, setSector] = useState("")
    const [confirmPassword, setConfirmPassword] =useState("")
    const [message, setMessage] = useState("")

    const navigate = useNavigate()

    const adminRegister = useSelector((state) => state.adminRegister)
    const {adminDetail} = adminRegister


    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
            firstName,
            lastName,
            password,
            email,
            address,
            postCode,
            sector
        }
        if(password !== confirmPassword){
            setMessage("password does not match")
        }else{
            dispatch(admin_signup(data))
            
        }
    }
    
     useEffect (() => {
        return () => {
            dispatch({type: ADMIN_SIGN_UP_RESET})
        }
     }, [dispatch])

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
                    <p>FirstName:</p>
                    <input className='inp' type="text" value={firstName}  onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className='mt-3'>
                    <p>LastName:</p>
                    <input className='inp' type="text" value={lastName}  onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className='mt-3'>
                    <p>Password:</p>
                    <input className='inp' type="text" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className='mt-3'>
                        <p>Confirm Password: {message}</p>
                        <input className='inp' type="text" value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                <div className='mt-3'>
                    <p>Email:</p>
                    <input className='inp' type="text" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='mt-3'>
                    <p>Address:</p>
                    <input className='inp' type="text" value={address}  onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div className='mt-3'>
                    <p>PostCode:</p>
                    <input className='inp' type="text" value={postCode}  onChange={(e) => setPostCode(e.target.value)}/>
                </div>
                <div className='mt-3'>
                    <p>Sector:</p>
                    <input className='inp' type="text" value={sector}  onChange={(e) => setSector(e.target.value)}/>
                </div>
                <div className='text-center'>
                    <button className='butt mt-5' type='submit'>Sign up</button>
                    <p className='mt-3'>Already have an account? <a href='asi'>Log in instead!</a></p>
                </div>
            </form>
        </div>
    </>
  )
}

export default Adminsignup