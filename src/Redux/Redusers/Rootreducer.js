import { combineReducers } from "redux";
import { adminRegisterReducer, adminSignInReducer, getAllUsersReducer, userUpdateReducer, getSingleUserReducer, userDeleteReducer} from "./Adminreducer";
import { getAllToolsReducer, getAvailableToolsReducer } from "./Toolreducer";
import { userRegisterReducer, userSignInReducer } from "./Userreducer";

const rootReducer = combineReducers({
    userRegister: userRegisterReducer,
    userAuth: userSignInReducer,
    adminRegister: adminRegisterReducer,
    adminAuth: adminSignInReducer,
    getSingleUser: getSingleUserReducer,
    getAllUsers: getAllUsersReducer,
    updateUser: userUpdateReducer,
    deleteUser: userDeleteReducer,
    getAllTools: getAllToolsReducer,
    getAvailableTools: getAvailableToolsReducer
})
export {rootReducer}