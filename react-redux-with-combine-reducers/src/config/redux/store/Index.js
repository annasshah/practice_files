import { combineReducers, createStore } from "redux";
import initialStateReducer from '../reducers/initialStateReducer'
import userAuthReducer from '../reducers/userAuthReducer'


const reducer = combineReducers({
    initialStateReducer,
    userAuthReducer
})


export const store = createStore(reducer)