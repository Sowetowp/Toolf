import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { delete_single_order, get_all_orders } from '../Redux/Actions/Adminaction'


const Orders = () => {

  const dispatch = useDispatch()
	const getAllOrders = useSelector((state) => state.getAllOrders)
	const { loading, orders } = getAllOrders

  const deleteOrder = useSelector((state) => state.deleteOrder)
	const { success } = deleteOrder

  console.log(orders)
  console.log(loading)
  const deleteOrderHandler = (e, id) => {
		console.log(id)
		e.preventDefault()
		if(window.confirm("Are you sure?")) {
			dispatch(delete_single_order(id)) 
		} 
  }

	useEffect(() => {
		dispatch(get_all_orders())
	}, [dispatch])

  useEffect(() => {
    if(success){
      dispatch(get_all_orders())
    }
	}, [dispatch, success])

  return (
    <>
        <div className='container bg-dark pb-3' style={{minHeight:"100vh"}}>
          <p className='admin text-center pt-3 text-light'>All Orders</p>
          {orders && orders.map(order => <div className="malgriddd p-5 my-3 bg-light">
            <p className=''>TOOL: {order.toolId}</p>
            <p>FIRSTNAME: {order.firstName}</p>
            <p className=''>LASTNAME: {order.lastName}</p>
            <p>EMAIL: {order.email}</p>
            <p>ADDRESS: {order.address}</p>
            <div className='mt-5'>
              <button onClick={(e) => deleteOrderHandler(e, order._id)} className='malcartt p-3 bg-dark text-danger'>DELETE</button>
            </div>
          </div>)}
        </div>
    </>
  )
}

export default Orders