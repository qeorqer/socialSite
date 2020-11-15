import {userType} from "./types/types";
import {ThunkAction} from "redux-thunk";
import {InferActionTypes, StateAppType, ThunkType} from "./store";
import {usersAPI} from "../API/users-api";

const SET_LOADING = "SET_LOADING";

export type setLoadingType = {
    type: typeof SET_LOADING
    flag: boolean
}

let init = {
    users: [] as Array<userType>,
    pageSize: 6 as number,
    totalCount: 0 as number,
    currentPage: 1 as number,
    isLoading: false as boolean,
    followingInProgress: [] as Array<number> //array of users id
};

const usersReducer = (state = init, action: actionType): initType => {
    switch (action.type) {
        case "TOGGLE_FOLLOW":
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

        case "SET_USERS":
            return {...state, "users": [...action.users]};

        case 'SET_CURRENT_PAGE':
            return {...state, "currentPage": action.currentPage};

        case 'SET_TOTAL_COUNT':
            return {...state, "totalCount": action.count};

        case 'SET_LOADING':
            return {...state, "isLoading": action.flag}

        case 'TOGGLE_FOLLOW_PROGRESS':
            return {
                ...state,
                "followingInProgress": action.flag ? [...state.followingInProgress, action.id] : state.followingInProgress.filter(id => id !== action.id)
            }

        default:
            return state;
    }
};

//action creators
export const actions = {
    toggleFollowCreator: (userId: number) => ({type: 'TOGGLE_FOLLOW', userId} as const),
    setUsersCreator: (users: Array<userType>) => ({type: 'SET_USERS', users} as const),
    setCurrentPageCreator: (currentPage: number) => ({
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const),
    setTotalCountCreator: (count: number) => ({type: 'SET_TOTAL_COUNT', count} as const),
    setLoadingCreator: (flag: boolean) => ({type: 'SET_LOADING', flag} as const),
    setToggleFollowCreator: (flag: boolean, id: number) => ({
        type: 'TOGGLE_FOLLOW_PROGRESS',
        flag,
        id
    } as const)
}


//thunks
export const getUsersThunkCreator = (currentPage: number, pageSize: number):ThunkType<actionType> => async (dispatch) => {
    dispatch(actions.setLoadingCreator(true));
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(actions.setUsersCreator(data.items));
    dispatch(actions.setTotalCountCreator(data.totalCount));
    dispatch(actions.setLoadingCreator(false));
}


export const toggleFollowThunkCreator = (flag: boolean, userId: number):ThunkType<actionType> => async (dispatch) => {
    dispatch(actions.setToggleFollowCreator(true, userId));
    let data = await (flag ? usersAPI.unfollow(userId) : usersAPI.follow(userId));
    if (data.resultCode === 0) {
        dispatch(actions.toggleFollowCreator(userId));
        dispatch(actions.setToggleFollowCreator(false, userId));
    }
}


type initType = typeof init;
type actionType = InferActionTypes<typeof actions>;

export default usersReducer;
