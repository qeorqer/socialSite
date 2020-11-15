import {InferActionTypes} from "./store";


let init = {
  darkTheme: false
};

const appCommonReducer = (state = init, action:actionsType) :initType=> {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        darkTheme: !state.darkTheme

        }

    default:
      return state;
  }
};

export const action = {
    setThemeCreator : () => ({ type: "TOGGLE_THEME" } as const),
}

type initType = typeof init;
type actionsType = InferActionTypes<typeof action>;

export default appCommonReducer;
