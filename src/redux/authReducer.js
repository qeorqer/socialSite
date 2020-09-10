import {authAPI, securityApi} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATE = "SET_USER_DATE";
const SET_CAPTCHA = "SET_CAPTCHA";

let init = {
    id: null,
    email: null,
    login: null,
    isLoading: false,
    isAuth: false,
    captcha: ""
};
const authReducer = (state = init, action) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            };
        case SET_CAPTCHA:
            return {
                ...state, captcha: action.captcha
            }
        default:
            return state;
    }
};
export const setUserDataCreator = (id, email, login, isAuth) => ({
    type: SET_USER_DATE,
    data: {id, email, login},
    isAuth
});
export const setCaptchaDataCreator = (captcha) => ({type: SET_CAPTCHA, captcha});

export const isAuthThunkCreator = (userId) => async (dispatch) => {
    let response = await authAPI.isAuth();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setUserDataCreator(id, login, email, true));
    }
}


export const logOutThunkCreator = (userId) => async (dispatch) => {
    let response = await authAPI.logOut()
    if (response.data.resultCode === 0) {
        dispatch(setUserDataCreator(null, null, null, false));
    }
}


export const logInThunkCreator = (email, password, rememberMe,captcha) => async (dispatch) => {

    let response = await authAPI.logIn(email, password, rememberMe,captcha);
    if (response.data.resultCode === 0) {
        dispatch(isAuthThunkCreator(response.data.data.userId));
    } else {
        if(response.data.resultCode === 10){
            dispatch(getCaptchaThunkCreator());
            dispatch(setCaptchaDataCreator(""));

        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "The data is incorrect";
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const getCaptchaThunkCreator = () => async (dispatch) => {
    const response = await securityApi.getCaptca();
    const captcha = response.data.url;
    dispatch(setCaptchaDataCreator(captcha));

}

export default authReducer;
