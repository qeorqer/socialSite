import {authAPI} from "../API/api";

const SET_USER_DATE = "SET_USER_DATE";

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

    default:
      return state;
  }
};
export const setUserDataCreator = (id,email,login) => ({ type: SET_USER_DATE, data:{id,email,login} });

export const isAuthThunkCreator = (userId) => {
  return (dispatch) => {
    authAPI.isAuth().then((response) => {
      if(response.data.resultCode === 0){
        let {id, login, email} = response.data.data;
        dispatch(setUserDataCreator(id,login,email));
      }
    });
  }
}
export default authReducer;
