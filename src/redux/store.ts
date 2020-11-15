import {createStore, combineReducers, applyMiddleware, compose, Action} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import appCommonReducer from "./appCommonReducer";
import authReducer from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
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
type reducersType = typeof reducers;
export type StateAppType = ReturnType<reducersType>;

//getting all the actions
export type InferActionTypes<T> = T extends {
    [key: string]: (...args: any[]) => infer R;}  ? R  : never;
//thunk type

export type ThunkType<A extends Action, R=Promise<void>> = ThunkAction<R, StateAppType, unknown, A>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
// @ts-ignore
export default store;