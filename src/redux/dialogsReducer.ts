import {InferActionTypes} from "./store";

type messageType = {
  id:number
  message:string
}
type dialogsDataType = {
  id:number
  name: string
}

let init = {
  messagesData: [
    { id: 1, message: "how r u" },
    { id: 2, message: "Cool" },
    { id: 3, message: "not cool" },
  ] as Array<messageType>,

  dialogsData: [
    { id: 1, name: "george" },
    { id: 2, name: "Gran de" },
    { id: 3, name: "Noone" },
    { id: 4, name: "Tony" },
    { id: 5, name: "SomeName" },
  ] as Array<dialogsDataType>
};


const dialogsReducer = (state = init, action:actionType):dialogsInitType => {
  switch (action.type) {
    case "ADD_MESSAGE":
      let newMessage = {
        id: state.messagesData.length,
        message: action.newMessageText,
      };

      if (newMessage.message) {
        return {
          ...state,
          messagesData: [...state.messagesData, newMessage],

        };
      }
      break;


    default:
      return state;
  }
  return state;
};

export const action = {
  addMessageCreator: (newMessageText:string) => ({ type: 'ADD_MESSAGE',newMessageText } as const)
};

type actionType = InferActionTypes<typeof action>;
export type dialogsInitType = typeof init;

export default dialogsReducer;
