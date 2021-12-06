import {applyMiddleware, combineReducers, createStore} from 'redux'
import userDataReducer from './reducer/userdataReducer'
import questionsReducer from './reducer/questionsReducer'
import thunk from 'redux-thunk'


const reducer = combineReducers({
    userDataReducer,
    questionsReducer
})

const store = createStore(reducer,applyMiddleware(thunk))

export default store