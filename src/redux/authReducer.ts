import {resultCodes, resultCodesWithCaptcha} from "../API/api";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";
import {authAPI} from "../API/auth-api";
import {securityApi} from "../API/security-api";
import {InferActionTypes, ThunkType} from "./store";


let init = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isLoading: false,
    isAuth: false,
    captcha: null as string | null
};
const authReducer = (state = init, action:actionType):initType => {
    switch (action.type) {
        case "SET_USER_DATE":
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            };
        case "SET_CAPTCHA":
            return {
                ...state, captcha: action.captcha
            }
        default:
            return state;
    }
};
const action = {
    setCaptchaDataCreator: (captcha:string | null) => ({type: 'SET_CAPTCHA', captcha} as const),
    setUserDataCreator: (id:number|null, email:string | null, login:string | null, isAuth:boolean) => ({
        type: 'SET_USER_DATE',
        data: {id, email, login},
        isAuth
    } as const)
}


export const isAuthThunkCreator = ():ThunkType<actionType> => async (dispatch) => {
    let response = await authAPI.isAuth();
    if (response.resultCode === resultCodes.success) {
        let {id, login, email} = response.data;
        dispatch(action.setUserDataCreator(id, login, email, true));
    }
}


export const logOutThunkCreator = (userId?:number):ThunkType<actionType> => async (dispatch) => {
    let response = await authAPI.logOut()
    if (response.data.resultCode === resultCodes.success) {
        dispatch(action.setUserDataCreator(null, null, null, false));
    }
}


export const logInThunkCreator = (email:string, password: string, rememberMe: boolean,captcha: string | null):ThunkType<actionType | ReturnType <typeof stopSubmit>> => async (dispatch) => {

    let responseData = await authAPI.logIn(email, password, rememberMe,captcha);
    if (responseData.resultCode === resultCodes.success) {
        dispatch(isAuthThunkCreator());
    } else {
        if(responseData.resultCode === resultCodesWithCaptcha.captchaRequired){
            dispatch(getCaptchaThunkCreator());
            dispatch(action.setCaptchaDataCreator(""));

        }
        let message = responseData.messages.length > 0 ? responseData.messages[0] : "The data is incorrect";
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const getCaptchaThunkCreator = ():ThunkType<actionType> => async (dispatch:Dispatch<actionType>) => {
    const response = await securityApi.getCaptca();
    const captcha = response.url;
    dispatch(action.setCaptchaDataCreator(captcha));

}

type initType = typeof init;
type actionType = InferActionTypes<typeof action>;

export default authReducer;
