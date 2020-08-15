const TOGGLEFOLLOW = "TOGGLE-FOLLOW-USER";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const SET_LOADING = "SET-LOADING";
let init = {
  users:[],
  pageSize:6,
  totalCount:0,
  currentPage:1,
  isLoading: false
};
const usersReducer = (state = init, action) => {
  switch (action.type) {
    case TOGGLEFOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id == action.userId) {
            return {
              ...el,
              followed: !el.followed,
            };
          }
          return el;
        }),
      };
      break;

    case SET_USERS:
      return { ...state,  "users": [...action.users]  };
      break;

      case SET_CURRENT_PAGE:
      return { ...state,  "currentPage": action.currentPage };
      break;

      case SET_TOTAL_COUNT:
      return { ...state,  "totalCount": action.count };
      break;

      case SET_LOADING:
      return {...state, "isLoading" : action.flag}

    default:
      return state;
  }
};
export const toggleFollowCreator = (userId) => ({ type: TOGGLEFOLLOW, userId });
export const setUsersCreator = (users) => ({ type: SET_USERS, users });
export const setCurrentPageCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalCountCreator = (count) => ({ type: SET_TOTAL_COUNT, count });
export const setLoadingCreator = (flag) => ({ type: SET_LOADING,flag });

export default usersReducer;
