import React from "react";
import {
  action,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import WithAuthRedirect from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
import {StateAppType} from "../../redux/store";

let mapStateToProps = (state:StateAppType) =>{
  return {
    messagesPage: state.messagesPage,
  }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,{
      sendMessage:action.addMessageCreator
    }),
    WithAuthRedirect
)(Dialogs);;
