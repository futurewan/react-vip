import { createStore, combineReducers } from "redux";
import {reducers as userReducer} from './pages/login'

const reducer = combineReducers({
    userInfo:userReducer
})

const store = createStore(reducer);

export default store;