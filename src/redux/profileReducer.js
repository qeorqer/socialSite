import {profileAPI} from "../API/api";
import {setLoadingCreator} from "./usersReducer";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

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

        default:
            return state;

    }
};

export const addPostCreator = (newPostText) => ({type: ADD_POST,newPostText});
export const setUserProfileCreator = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatusCreator = (status) => ({type: SET_USER_STATUS, status});

export const getProfileThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(setLoadingCreator(true));
        profileAPI.getProfile(userId).then((response) => {
            dispatch(setUserProfileCreator(response.data));
            dispatch(setLoadingCreator(false));
        });
    }
}
export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then((response) => {

            dispatch(setUserStatusCreator(response.data));
        });
    }
}
export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((response) => {
            if(response.data.resultCode === 0){
            dispatch(setUserStatusCreator(status));
            }
        });
    }
}
export default profileReducer;
