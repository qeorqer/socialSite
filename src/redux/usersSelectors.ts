import {StateAppType} from "./store";

export const getUsers = (state:StateAppType) => (
    state.usersPage.users
)
export const getPageSize = (state:StateAppType) => (
    state.usersPage.pageSize
)
export const getTotalCount = (state:StateAppType) => (
    state.usersPage.totalCount
)
export const getCurrentPage = (state:StateAppType) => (
    state.usersPage.currentPage
)
export const getIsLoading = (state:StateAppType) => (
    state.usersPage.isLoading
)
export const getFollowingInProgress = (state:StateAppType) => (
    state.usersPage.followingInProgress
)
