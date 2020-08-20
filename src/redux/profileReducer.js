const ADD_POST = "ADD-POST";
const CHANGE_TEXT = "CHANGE-PROFILE-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let init = {
    postsData: [
        {id: 1, message: "My first post", likes: 5},
        {id: 2, message: "Talking about nothing", likes: 212},
        {id: 3, message: "What to wear?", likes: 11},
        {id: 4, message: "I am buying the longboard", likes: 333},
    ],
    newPostText: "",
    profile: null
}
const profileReducer = (state = init, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: state.postsData.length,
                message: state.newPostText,
                likes: 0,
            };

            if (newPost.message) {
                return {
                    ...state,
                    newPostText: "",
                    postsData: [...state.postsData, newPost]
                }
            }
            break;

        case CHANGE_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
            break;
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
            break;

        default:
            return state;

    }
};

export const addPostCreator = () => ({type: ADD_POST});
export const changeTextCreator = (text) => ({type: CHANGE_TEXT, text});
export const setUserProfileCreator = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;
