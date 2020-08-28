import classes from "./Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../common/FormsControls/FormControls";
import {required} from "../../utilits/validators/validators";

let SendMessageForm = props =>{

    return(
        <form onSubmit={props.handleSubmit} className={classes.addMessage}>
            <Field component ={Textarea} name ="message"
                   placeholder ="Write a message"
                   validate = {[required]}
            />
            <button>Send</button>

        </form>
    )
}

SendMessageForm = reduxForm({
    form:"sendMessage"
})(SendMessageForm);

export default SendMessageForm;