import React from "react";
import {
  changeTextMessageCreator,
  addMessageCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) =>{
  return {
    messagesPage: state.messagesPage,

    
  }
}





export default compose(
    connect(mapStateToProps,{
      changeText:changeTextMessageCreator,
      sendMessage:addMessageCreator
    }),
    WithAuthRedirect
)(Dialogs);;
