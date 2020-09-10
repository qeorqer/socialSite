import {profileAPI} from "../API/api";
import {setLoadingCreator} from "./usersReducer";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const REMOVE_POST = "REMOVE_POST";
const SET_PHOTO = "SET_PHOTO";

let init = {
    postsData: [
        {id: 1, message: "My first post", likes: 5},
        {id: 2, message: "Talking about nothing", likes: 212},
        {id: 3, message: "What to wear?", likes: 11},
        {id: 4, message: "I am buying the longboard", likes: 333},
    ],
    profile: null,
    status: ""
}
const profileReducer = (state = init, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: state.postsData.length,
                message: action.newPostText,
                likes: 0,
            };

            if (newPost.message) {
                return {
                    ...state,
                    postsData: [...state.postsData, newPost]
                }
            }
            break;
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }

        case REMOVE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(el => el.id !== action.postId)
            }
        case SET_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }


        default:
            return state;

    }
};

export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfileCreator = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatusCreator = (status) => ({type: SET_USER_STATUS, status});
export const removePostCreator = (postId) => ({type: REMOVE_POST, postId});
export const setPhotoCreator = (photos) => ({type: SET_PHOTO, photos});

export const getProfileThunkCreator = (userId) => async (dispatch) => {
    dispatch(setLoadingCreator(true));
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfileCreator(response.data));
    dispatch(setLoadingCreator(false));
}

export const getStatusThunkCreator = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatusCreator(response.data));
}

export const updateStatusThunkCreator = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatusCreator(status));
    }
}

export const setPhotoThunkCreator = (file) => async (dispatch) => {
    let response = await profileAPI.setPhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(setPhotoCreator(response.data.data.photos));
    }
}

export const saveProfileThunkCreator = (profile) => async (dispatch,getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getProfileThunkCreator(userId));
    } else{
        dispatch(stopSubmit("setProfile",{_error:response.data.messages[0]}))
    }
}


export default profileReducer;
