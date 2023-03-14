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