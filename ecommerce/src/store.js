import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/index1'

const initialState = {}

const store = createStore(rootReducer, initialState ,composeWithDevTools())

export default store