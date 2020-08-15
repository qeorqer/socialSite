import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "My first post", likes: 5 },
        { id: 2, message: "Talking about nothing", likes: 212 },
        { id: 3, message: "What to wear?", likes: 11 },
        { id: 3, message: "I am buying the longboard", likes: 333 },
      ],
      newPostText: "",
    },
    messagesPage: {
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
    }
  },
  _Rerender() {},

  subscribe(observer) {
    this._Rerender = observer;
  },
  get state() {
    return this._state;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage,action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage,action);

    this._Rerender();
    
  },
};

export default store;
