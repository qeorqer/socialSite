import React from "react";
import {
  changeTextMessageCreator,
  addMessageCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) =>{
  return {
    messagesPage: state.messagesPage
    
  }
}
let mapDispatchToProps = (dispatch) =>{
  return {
    changeText: (text) => {
      let action = changeTextMessageCreator(text);
      dispatch(action);
    },
    sendMessage: () => {
      let action = addMessageCreator();
      dispatch(action);
    }
  }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;
