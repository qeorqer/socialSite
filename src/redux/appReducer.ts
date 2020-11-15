import {isAuthThunkCreator} from "./authReducer";
import {InferActionTypes} from "./store";

let init = {
    initialized: false
};
const appReducer = (state = init, action:actionsType):initType => {
    switch (action.type) {
        case "SET_INITIALIZED":
            return {
                ...state,

                initialized: true
            };

        default:
            return state;
    }
};

const action = {
    setInitializedCreator: () => ({type : 'SET_INITIALIZED'} as const),
}

export const initializeThunkCreator = () => (dispatch: any) => {
        let dispatchRes = dispatch(isAuthThunkCreator());
        dispatchRes.then(() => {
            dispatch(action.setInitializedCreator());
        })
}


type initType = typeof init;
type actionsType = InferActionTypes<typeof action>;

export default appReducer;
