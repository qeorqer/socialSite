import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../Dialogs.module.css";
const DialogItem = (props) => (
  <div>
    <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>
      {props.name}
    </NavLink>
  </div>
);

export default DialogItem;
