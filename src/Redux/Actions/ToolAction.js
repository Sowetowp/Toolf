import * as types from "../Types"
import { config } from "../Config"
import axios from "axios"
import toast from "react-hot-toast"

const url = config.liveUrl
export const get_all_tools = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_ALL_TOOLS_REQUEST })

		const { data } = await axios.get(`https://misty-skirt-ray.cyclic.app/api/tool/`)
        if(data.status == "ok"){
            console.log("yes")
            console.log(data.data)
            dispatch({ type: types.GET_ALL_TOOLS_SUCCESS, payload: data.data })
        }else {
            console.log("no")
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		
		dispatch({ type: types.GET_ALL_TOOLS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const get_available_tools = () => async (dispatch, getState) => {
	try {
		dispatch({ type: types.GET_AVAILABLE_TOOLS_REQUEST })

		const { data } = await axios.get(`https://misty-skirt-ray.cyclic.app/api/tool/available`)
        if(data.status == "ok"){
            console.log("yes")
            console.log(data.data)
            dispatch({ type: types.GET_AVAILABLE_TOOLS_SUCCESS, payload: data.data })
        }else {
            console.log("no")
        }
	} catch (error) {
		const message = error.response
			? error.response.data.message
			: 'Something went wrong'
		
		dispatch({ type: types.GET_AVAILABLE_TOOLS_FAIL, payload: message })
		toast.error(message, { position: 'top-right' })
	}
}

export const hire_tool = (hire, id) => async(dispatch, getState) => {
    console.log(hire)
	console.log(id)
    try {
        dispatch({type: types.HIRE_REQUEST})
        const {data} = await axios.post(`${url}/tool/hire/${id}`, hire)
        if(data.status === "ok"){
            dispatch({type: types.HIRE_SUCCESS, payload: data.data})
            toast.success("order placed successfully", {
                position: "top-right"
            })
        }
    } catch (error) {
        console.log(error)
        const message = error.response ? error.response.data.message : "something went wrong"
        dispatch({type: types.HIRE_FAIL, payload: message})
        toast.error(message, {
            position: "top-right"
        })
    }
}