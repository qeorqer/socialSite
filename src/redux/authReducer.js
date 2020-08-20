const SET_USER_DATE = "SET_USER_DATE";
const SET_LOADING = "SET_LOADING";

let init = {
  id: null,
  email: null,
  login: null,
  isLoading: false,
  isAuth:false
};
const authReducer = (state = init, action) => {
  switch (action.type) {
    case SET_USER_DATE:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };

      case SET_LOADING:
      return {...state, "isLoading" : action.flag}

    default:
      return state;
  }
};
export const setUserDataCreator = (id,email,login) => ({ type: SET_USER_DATE, data:{id,email,login} });
export const setLoadingCreator = (flag) => ({ type: SET_LOADING,flag });

export default authReducer;
