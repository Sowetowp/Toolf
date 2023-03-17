import * as types from "../Types"
import { config } from "../Config"
import axios from "axios"
import toast from "react-hot-toast"

const url = config.liveUrl
export const admin_signup = (admin) => async(dispatch, getState) => {
    console.log(admin)
    try {
        dispatch({type: types.ADMIN_SIGN_UP_REQUEST})

        const {adminRegister: {adminDetail},} = getState()
        const {data} = await axios.post(`${url}/admin`, admin)
        if(data.status === "ok"){
            dispatch({type: types.ADMIN_SIGN_UP_SUCCESS, payload: data.data})
            toast.success("user registered successfully", {
                position: "top-right"
            })
        }
    } catch (error) {
        console.log(error)
        const message = error.response ? error.response.data.message : "something went wrong"
        dispatch({type: types.ADMIN_SIGN_UP_FAIL, payload: message})
        toast.error(message, {
            position: "top-right"
        })
    }
}

export const admin_signin = (email, password) => async(dispatch, getState) => {
    try {
        dispatch({type: types.ADMIN_SIGN_IN_REQUEST})
        const  {data} = await axios.post(`${url}/admin/in`, {email, password})
        if(data.status === "ok"){
            dispatch({type: types.ADMIN_SIGN_IN_SUCCESS, payload: data.data})
            toast.success(`Welcome ${data.data.firstName}`,{position: "top-right"})
        }
    } catch (error) {
        const message = error.response ? error.response.data.message : "something went wrong"
        dispatch({type: types.ADMIN_SIGN_IN_FAIL, payload: message})
        toast.error(message, {
            position: "top-right"
        })
    }
}

export const admin_logout = () => (dispatch) => {
    dispatch({type: types.ADMIN_LOGOUT})
}

export const get_all_user = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_ALL_USERS_REQUEST })

		const { data } = await axios.get(`https://drab-teal-squirrel.cyclic.app/api/admin/`)
        if(data.status == "ok"){
            console.log("yes")
            console.log(data.data)
            dispatch({ type: types.GET_ALL_USERS_SUCCESS, payload: data.data })
        }else {
            console.log("no")
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		
		dispatch({ type: types.GET_ALL_USERS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_single_user = (id) => async (dispatch) => {
	try {
		dispatch({ type: types.GET_SINGLE_USER_REQUEST })

		const { data } = await axios.get(`https://drab-teal-squirrel.cyclic.app/api/admin/${id}`)
        if(data.status == "ok"){
            console.log("yes")
            console.log(data.data)
            dispatch({ type: types.GET_SINGLE_USER_SUCCESS, payload: data.data })
        }else {
            console.log("no")
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		
		dispatch({ type: types.GET_SINGLE_USER_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}


export const update_user = (user, id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.USER_UPDATE_REQUEST })

		// const {
		// 	adminAuth: { userDetail },
		// } = getState()

		const { data } = await axios.patch(
			`${url}/admin/${id}`,
            user
		)

		dispatch({ type: types.USER_UPDATE_SUCCESS, payload: data.data })
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		
		dispatch({ type: types.USER_UPDATE_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const delete_single_user = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.DELETE_SINGLE_USER_REQUEST })


		const { data } = await axios.delete(`${url}/admin/${id}`)

		dispatch({ type: types.DELETE_SINGLE_USER_SUCCESS})
		toast.success('User deleted successfully!', {
			position: 'top-right',
		})
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		dispatch({ type: types.DELETE_SINGLE_USER_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_all_orders = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_ALL_ORDERS_REQUEST })

		const { data } = await axios.get(`https://drab-teal-squirrel.cyclic.app/api/admin/order/`)
        if(data.status == "ok"){
            console.log("yes")
            console.log(data.data)
            dispatch({ type: types.GET_ALL_ORDERS_SUCCESS, payload: data.data })
        }else {
            console.log("no")
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		
		dispatch({ type: types.GET_ALL_ORDERS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const delete_single_order = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: types.DELETE_SINGLE_ORDER_REQUEST })


		const { data } = await axios.delete(`${url}/admin/order/${id}`)

		dispatch({ type: types.DELETE_SINGLE_ORDER_SUCCESS})
		toast.success('order deleted successfully!', {
			position: 'top-right',
		})
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		dispatch({ type: types.DELETE_SINGLE_ORDER_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}