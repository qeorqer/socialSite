import {authAPI} from "../API/api";
import React from "react";
import {stopSubmit} from "redux-form";

const SET_USER_DATE = "SET_USER_DATE";

let init = {
    id: null,
    email: null,
    login: null,
    isLoading: false,
    isAuth: false
};
const authReducer = (state = init, action) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            };

        default:
            return state;
    }
};
export const setUserDataCreator = (id, email, login, isAuth) => ({
    type: SET_USER_DATE,
    data: {id, email, login},
    isAuth
});

export const isAuthThunkCreator = (userId) => {
    return (dispatch) => {
        return authAPI.isAuth().then((response) => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setUserDataCreator(id, login, email, true));
            }
        });
    }
}

export const logOutThunkCreator = (userId) => {
    return (dispatch) => {
        authAPI.logOut().then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataCreator(null, null, null, false));
            }
        });
    }
}

export const logInThunkCreator = (email, password, rememberMe) => {

    return (dispatch) => {

        authAPI.logIn(email, password, rememberMe).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(isAuthThunkCreator(response.data.data.userId));
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "The data is incorrect";
                dispatch(stopSubmit('login', {_error: message}));
            }
        });
    }
}
export default authReducer;
