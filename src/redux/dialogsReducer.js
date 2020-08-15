const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_TEXT_MESSAGE = "CHANGE-MESSAGE-TEXT";

let init = {
  messagesData: [
    { id: 1, message: "how r u" },
    { id: 2, message: "Cool" },
    { id: 3, message: "not cool" },
  ],

  dialogsData: [
    { id: 1, name: "george" },
    { id: 2, name: "Gran de" },
    { id: 3, name: "Noone" },
    { id: 4, name: "Tony" },
    { id: 5, name: "SomeName" },
  ],
  newMessageText: "",
};
const dialogsReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messagesData.length,
        message: state.newMessageText,
      };

      if (newMessage.message) {
        return {
          ...state,
          newMessageText: "",
          messagesData: [...state.messagesData, newMessage],
        };
      }
      break;

    case CHANGE_TEXT_MESSAGE:
      return {
        ...state,
        newMessageText: action.text,
      };
      break;
    default:
      return state;
  }
};

export const addMessageCreator = () => ({ type: ADD_MESSAGE });
export const changeTextMessageCreator = (text) => ({
  type: CHANGE_TEXT_MESSAGE,
  text,
});

export default dialogsReducer;
