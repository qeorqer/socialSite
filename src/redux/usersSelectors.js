export const getUsers = (state) => (
    state.usersPage.users
)
export const getPageSize = (state) => (
    state.usersPage.pageSize
)
export const getTotalCount = (state) => (
    state.usersPage.totalCount
)
export const getCurrentPage = (state) => (
    state.usersPage.currentPage
)
export const getIsLoading = (state) => (
    state.usersPage.isLoading
)
export const getFollowingInProgress = (state) => (
    state.usersPage.followingInProgress
)
