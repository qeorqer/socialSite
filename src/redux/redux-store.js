import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import appCommonReducer from "./appCommonReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    appCommon: appCommonReducer,
    auth: authReducer,
    form: formReducer,
    setApp:appReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;