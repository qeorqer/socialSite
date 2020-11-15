import {actions, setLoadingType} from "./usersReducer";
import {stopSubmit} from "redux-form";
import { postDataType, profilePhotos, profileType } from "./types/types";
import {Dispatch} from "redux";
import {profileAPI} from "../API/profile-api";
import {ThunkType} from "./store";

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
    ] as Array<postDataType>,
    profile:null as profileType|null,
    myProfile: null as profileType|null,
    status: "" as string
}

const profileReducer = (state = init, action:actionType):initState => {
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
            if(action.mine){
                return {
                    ...state,
                    profile: action.profile,
                    myProfile: action.profile,
                }
            }
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
                profile: {...state.profile, photos: action.photos} as profileType
            }


        default:
            return state;

    }
    return state
};

type addPostType = {
    type: typeof ADD_POST
    newPostText:string
}
type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: profileType
    mine: boolean
}
type setUserStatusType = {
    type: typeof  SET_USER_STATUS
    status:string
}
type removePostType = {
    type:typeof REMOVE_POST
    postId:number
}
type setPhotoType = {
    type: typeof SET_PHOTO
    photos: profilePhotos
}
export const addPostCreator = (newPostText:string):addPostType => ({type: ADD_POST, newPostText});
export const setUserProfileCreator = (profile:profileType,mine:boolean):setUserProfileType => ({type: SET_USER_PROFILE, profile,mine});
export const setUserStatusCreator = (status:string):setUserStatusType => ({type: SET_USER_STATUS, status});
export const removePostCreator = (postId:number):removePostType => ({type: REMOVE_POST, postId});
export const setPhotoCreator = (photos:profilePhotos):setPhotoType => ({type: SET_PHOTO, photos});


export const getProfileThunkCreator = (userId:number,mine = false) => async (dispatch:Dispatch<actionType>) => {
    dispatch(actions.setLoadingCreator(true));
    let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfileCreator(data,mine));
    dispatch(actions.setLoadingCreator(false));
}

export const getStatusThunkCreator = (userId:number):ThunkType<actionType> => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setUserStatusCreator(data));
}

export const updateStatusThunkCreator = (status:string):ThunkType<actionType> => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUserStatusCreator(status));
    }
}

export const setPhotoThunkCreator = (file:File):ThunkType<actionType> => async (dispatch:Dispatch<actionType>) => {
    let data = await profileAPI.setPhoto(file);
    if (data.resultCode === 0) {
        dispatch(setPhotoCreator(data.data.photos));
    }
}

export const saveProfileThunkCreator = (profile:profileType):ThunkType<actionType | ReturnType<typeof stopSubmit>>  => async (dispatch:any,getState:any) => {
    const userId = getState().auth.id;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        dispatch(getProfileThunkCreator(userId));
    } else{
        dispatch(stopSubmit("setProfile",{_error:data.messages[0]}))
    }
}

export type initState = typeof init;
type actionType = setPhotoType | removePostType | setUserStatusType | setUserProfileType | addPostType | setLoadingType;


export default profileReducer;
