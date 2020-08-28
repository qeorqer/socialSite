import React from "react";
import {isAuthThunkCreator} from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let init = {
    initialized: false
};
const appReducer = (state = init, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };

        default:
            return state;
    }
};

export const  setInitializedCreator= () => ({type:SET_INITIALIZED});

export const initializeThunkCreator = () => {
    return (dispatch) => {
        let dispatchRes = dispatch(isAuthThunkCreator());
        dispatchRes.then(() => {
            dispatch(setInitializedCreator());
        })
    }
}
export default appReducer;
