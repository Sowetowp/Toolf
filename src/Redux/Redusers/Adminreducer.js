import * as types from "../Types"

export const adminRegisterReducer = (state = {}, action) => {
    switch(action.type){
        case types.ADMIN_SIGN_UP_REQUEST:
            return {loading: true}
        case types.ADMIN_SIGN_UP_SUCCESS:
            return {loading: false, adminDetail:action.payload}
        case types.ADMIN_SIGN_UP_FAIL:
            return {loading: false, error: action.payload}
        case types.ADMIN_SIGN_UP_RESET:
            return {}
        case types.ADMIN_LOGOUT:
            return {}
        default:
            return state
    }
}

export const adminSignInReducer = (state ={}, action) => {
    switch(action.type){
        case types.ADMIN_SIGN_IN_REQUEST:
            return {loading: true}
        case types.ADMIN_SIGN_IN_SUCCESS:
            return {loading: false, adminDetail:action.payload}
        case types.ADMIN_SIGN_IN_FAIL:
            return {loading: false, error: action.payload}
        case types.ADMIN_LOGOUT:
            return {}
        default:
            return state
    }
}

export const getAllUsersReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_ALL_USERS_REQUEST:
			return { loading: true }
		case types.GET_ALL_USERS_SUCCESS:
			return { loading: false, users: action.payload }
		case types.GET_ALL_USERS_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_ALL_USERS_RESET:
            return {}
		default:
			return state
	}
}

export const getSingleUserReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_SINGLE_USER_REQUEST:
			return { loading: true }
		case types.GET_SINGLE_USER_SUCCESS:
			return { loading: false, user: action.payload }
		case types.GET_SINGLE_USER_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const userUpdateReducer = (state = { loading: false }, action) => {
	switch (action.type) {
		case types.USER_UPDATE_REQUEST:
			return { ...state, loading: true }
		case types.USER_UPDATE_SUCCESS:
			return { loading: false, success : true, user: action.payload }
		case types.USER_UPDATE_FAIL:
			return { loading: false, error: action.payload }
		case types.USER_UPDATE_RESET:
			return {}
		default:
			return state
	}
}

export const userDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case types.DELETE_SINGLE_USER_REQUEST:
			return { loading: true }
		case types.DELETE_SINGLE_USER_SUCCESS:
			return { loading: false, success : true }
		case types.DELETE_SINGLE_USER_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const getAllOrdersReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_ALL_ORDERS_REQUEST:
			return { loading: true }
		case types.GET_ALL_ORDERS_SUCCESS:
			return { loading: false, orders: action.payload }
		case types.GET_ALL_ORDERS_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_ALL_ORDERS_RESET:
            return {}
		default:
			return state
	}
}

export const orderDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case types.DELETE_SINGLE_ORDER_REQUEST:
			return { loading: true }
		case types.DELETE_SINGLE_ORDER_SUCCESS:
			return { loading: false, success : true }
		case types.DELETE_SINGLE_ORDER_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}