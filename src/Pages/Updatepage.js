import React, { useEffect, useState } from 'react'
import { user_signup } from '../Redux/Actions/userAction'
import { useDispatch, useSelector } from 'react-redux'
import { USER_UPDATE_RESET } from '../Redux/Types'
import { update_user } from '../Redux/Actions/Adminaction'
import { get_single_user } from '../Redux/Actions/Adminaction'


const Updatepage = (match) => {
    const getSingleUser = useSelector((state) => state.getSingleUser)
	const { loading, user } = getSingleUser
    console.log(user)
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    const id = params._id
    console.log(id)
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [postCode, setPostCode] = useState("")
    const [sector, setSector] = useState("")
    

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
        
        dispatch(update_user(data, id))
    }
    
     useEffect (() => {
        return () => {
            dispatch({type: USER_UPDATE_RESET})
        }
     }, [dispatch])
     
     useEffect(() =>{
        return () => {
            dispatch(get_single_user())
        }
     }, [dispatch])
    


  return (
    <>
        <div className='bg-dark md py-1'>
            <div className='p-5 m-5 border bg-dark text-light'>
                <p>UPDATE PAGE</p>
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
                        <button className='butt mt-5' type='submit'>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Updatepage