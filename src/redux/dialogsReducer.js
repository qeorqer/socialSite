const ADD_MESSAGE = "ADD-MESSAGE";

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
  ]
};
const dialogsReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
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
};

export const addMessageCreator = (newMessageText) => ({ type: ADD_MESSAGE,newMessageText });


export default dialogsReducer;
