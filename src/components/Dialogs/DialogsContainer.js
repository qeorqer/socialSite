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
const DialogsContainer = connect(mapStateToProps,{
  changeText:changeTextMessageCreator,
  sendMessage:addMessageCreator
})(Dialogs);
export default DialogsContainer;
