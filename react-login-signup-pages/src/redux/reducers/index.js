import { combineReducers } from "redux";
import {authReducer} from "./authReducer";
import { userDataReducer } from "./userDataReducer";



export const reducers = combineReducers({
authReducer,
userDataReducer
    
})



