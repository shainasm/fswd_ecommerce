import { combineReducers } from "redux";
import auth from './authReducer'
import loader from './loaderReducer'
import productsr from './productsr'
import categoryr from './categoryr'

export default combineReducers({
    auth,
    loader,
    productsr,
    categoryr
})