import {usersAPI} from "../API/api";

const TOGGLEFOLLOW = "TOGGLE-FOLLOW-USER";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const SET_LOADING = "SET-LOADING";
const TOGGLE_FOLLOW_PROGRESS = "TOGGLE_FOLLOW_PROGRESS";

let init = {
    users: [],
    pageSize: 6,
    totalCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: []
};
const usersReducer = (state = init, action) => {
    switch (action.type) {
        case TOGGLEFOLLOW:
            return {
                ...state,
                users: state.users.map((el) => {
                    if (el.id === action.userId) {
                        return {
                            ...el,
                            followed: !el.followed,
                        };
                    }
                    return el;
                }),
            };

        case SET_USERS:
            return {...state, "users": [...action.users]};

        case SET_CURRENT_PAGE:
            return {...state, "currentPage": action.currentPage};

        case SET_TOTAL_COUNT:
            return {...state, "totalCount": action.count};

        case SET_LOADING:
            return {...state, "isLoading": action.flag}

        case TOGGLE_FOLLOW_PROGRESS:
            console.log(3213);
            return {
                ...state,
                "followingInProgress": action.flag ? [...state.followingInProgress, action.id] : state.followingInProgress.filter(id => id !== action.id)
            }

        default:
            return state;
    }
};
export const toggleFollowCreator = (userId) => ({type: TOGGLEFOLLOW, userId});
export const setUsersCreator = (users) => ({type: SET_USERS, users});
export const setCurrentPageCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalCountCreator = (count) => ({type: SET_TOTAL_COUNT, count});
export const setLoadingCreator = (flag) => ({type: SET_LOADING, flag});
export const setToggleFollowCreator = (flag, id) => ({type: TOGGLE_FOLLOW_PROGRESS, flag, id});

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setLoadingCreator(true));
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(setUsersCreator(data.items));
            dispatch(setTotalCountCreator(data.totalCount));
            dispatch(setLoadingCreator(false));
        });
    }
}

export const toggleFollowThunkCreator = (flag, userId) => {
    return (dispatch) => {
        dispatch(setToggleFollowCreator(true, userId));

        (flag ? usersAPI.unfollow(userId) : usersAPI.follow(userId))
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(toggleFollowCreator(userId));
                    dispatch(setToggleFollowCreator(false, userId));
                }
            });


    }
}

export default usersReducer;
