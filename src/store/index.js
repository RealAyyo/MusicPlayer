import {combineReducers, createStore} from 'redux'
import {userReducer} from "./reducers";

const rootReducer = combineReducers({
    user: userReducer
})


export default createStore(rootReducer)