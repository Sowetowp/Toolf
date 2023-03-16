import * as types from "../Types"

export const getAllToolsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_ALL_TOOLS_REQUEST:
			return { loading: true }
		case types.GET_ALL_TOOLS_SUCCESS:
			return { loading: false, tools: action.payload }
		case types.GET_ALL_TOOLS_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_ALL_TOOLS_RESET:
            return {}
		default:
			return state
	}
}

export const getAvailableToolsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.GET_AVAILABLE_TOOLS_REQUEST:
			return { loading: true }
		case types.GET_AVAILABLE_TOOLS_SUCCESS:
			return { loading: false, tools: action.payload }
		case types.GET_AVAILABLE_TOOLS_FAIL:
			return { loading: false, error: action.payload }
        case types.GET_AVAILABLE_TOOLS_RESET:
            return {}
		default:
			return state
	}
}

export const hireReducer = (state = {}, action) => {
    switch(action.type){
        case types.HIRE_REQUEST:
            return {loading: true}
        case types.HIRE_SUCCESS:
            return {loading: false, success: true}
        case types.HIRE_FAIL:
            return {loading: false, error: action.payload}
        case types.HIRE_RESET:
            return {}
        default:
            return state
    }
}

export const toolUpdateReducer = (state = {}, action) => {
	switch (action.type) {
		case types.TOOL_UPDATE_REQUEST:
			return { ...state, loading: true }
		case types.TOOL_UPDATE_SUCCESS:
			return { loading: false, success : true, tool: action.payload }
		case types.TOOL_UPDATE_FAIL:
			return { loading: false, error: action.payload }
		case types.TOOL_UPDATE_RESET:
			return {}
		default:
			return state
	}
}