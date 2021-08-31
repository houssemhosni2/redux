import {createStore} from "redux"
import TodoReducer from "./Reducers/Reducer"

const store=createStore(TodoReducer)

export default store;