const TOGGLE_THEME = "TOGGLE-THEME";
let init = {
  darkTheme: false
};

const appCommonReducer = (state = init, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        lightTheme: !state.lightTheme
        }
      break;

    default:
      return state;
  }
};

export default appCommonReducer;

export const setThemeCreator = () => ({ type: TOGGLE_THEME });