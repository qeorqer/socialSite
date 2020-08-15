import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./dialogsItem/DialogItem";

const Dialogs = (props) => {

  let dialogItems = props.messagesPage.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} key={el.id} />
  ));

  let messageItems = props.messagesPage.messagesData.map((el) => (
    <Message message={el.message} key={el.id} />
  ));

  let sendMessage = () => {
    props.sendMessage();
  };

  let changeText = (e) => {
    let text = e.target.value;
   props.changeText(text);
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogItems}</div>
      <div className={classes.dialogContent}>
        <div className={classes.messages}>{messageItems}</div>

        <div className={classes.addMessage}>
          <textarea
            onChange={changeText}
            value={props.messagesPage.newMessageText}
            placeholder ="Write a message"
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
