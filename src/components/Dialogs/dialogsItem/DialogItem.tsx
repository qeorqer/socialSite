import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../Dialogs.module.css";

type propsType = {
    id:number
    name:string
}
const DialogItem:React.FC<propsType> = (props) => (
  <div>
    <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>
      {props.name}
    </NavLink>
  </div>
);

export default DialogItem;
