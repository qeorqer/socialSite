import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./dialogsItem/DialogItem";
import SendMessageForm from "./SendMessageForm";
import {dialogsInitType} from "../../redux/dialogsReducer";

type propsType = {
    messagesPage: dialogsInitType
    sendMessage: (message:string) => void
}

export type newMessageFormType = {
    message:string
}
const Dialogs:React.FC<propsType> = (props) => {

  let dialogItems = props.messagesPage.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} key={el.id} />
  ));

  let messageItems = props.messagesPage.messagesData.map((el) => (
    <Message message={el.message} key={el.id} />
  ));

  let sendMessage = (values:newMessageFormType) => {
      props.sendMessage(values.message);
  };



  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogItems}</div>
      <div className={classes.dialogContent}>
        <div className={classes.messages}>{messageItems}</div>

          <SendMessageForm onSubmit = {sendMessage}/>
      </div>
    </div>
  );
};

export default Dialogs;
