import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { get_all_user, delete_single_user } from '../Redux/Actions/Adminaction'
import { GET_ALL_USERS_RESET } from '../Redux/Types'
import Updatepage from './Updatepage'


const Userss = () => {

  const dispatch = useDispatch()
	const getAllUsers = useSelector((state) => state.getAllUsers)
	const { loading, users } = getAllUsers

  const deleteUser = useSelector((state) => state.deleteUser)
	const { success } = deleteUser

  console.log(users)
  console.log(loading)
  const deleteUserHandler = (e, id) => {
		console.log(id)
		e.preventDefault()
		if(window.confirm("Are you sure?")) {
			dispatch(delete_single_user(id)) 
		} 
  }

  const updateUserHandler = (e, id) => {
    dispatch(Updatepage(e, id))
    Navigate("/update")
  }

	useEffect(() => {
		dispatch(get_all_user())
	}, [dispatch])

  useEffect(() => {
    if(success){
      dispatch(get_all_user())
    }
	}, [dispatch, success])

  return (
    <>
        <div className='container bg-dark pb-3' style={{minHeight:"100vh"}}>
          <p className='admin text-center pt-3 text-light'>All Users</p>
          {users && users.map(user => <div className="malgriddd p-5 my-3 bg-light">
            <p className=''>FIRSTNAME: {user.firstName}</p>
            <p className=''>LASTNAME: {user.lastName}</p>
            <p>EMAIL: {user.email}</p>
            <p>ADDRESS: {user.address}</p>
            <p>POSTCODE: {user.postCode}</p>
            <p>SECTOR: {user.sector}</p>
            <div className='d-flex justify-content-between mt-5'>
              <a href='/update'><button className='malcartt p-3 text-success' onClick={(e) => updateUserHandler(e, user._id)}>UPDATE</button></a>
              <button onClick={(e) => deleteUserHandler(e, user._id)} className='malcartt p-3 bg-dark text-danger'>DELETE</button>
            </div>
          </div>)}
        </div>
    </>
  )
}

export default Userss