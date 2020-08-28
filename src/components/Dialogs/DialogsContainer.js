import React from "react";
import {
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
      sendMessage:addMessageCreator
    }),
    WithAuthRedirect
)(Dialogs);;
