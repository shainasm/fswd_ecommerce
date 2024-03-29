import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/index'
import thunk from 'react-redux'
const initialState = {}

const middlewares = [thunk]



const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))

export default store