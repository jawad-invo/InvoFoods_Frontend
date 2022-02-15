import loginReducer from './reducers/loginReducer';
import { combineReducers } from "redux";

const allReducers = combineReducers({
    login:loginReducer
})
export default allReducers;
