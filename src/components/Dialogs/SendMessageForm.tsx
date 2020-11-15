import classes from "./Dialogs.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../common/FormsControls/FormControls";
import {required} from "../../utilits/validators/validators";
import {newMessageFormType} from "./Dialogs";

type propsType = {
    onSubmit: (formData: newMessageFormType) => void
}
const SendMessageForm:React.FC<InjectedFormProps<newMessageFormType, propsType> & propsType > = props =>{

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

const rSendMessageForm = reduxForm<newMessageFormType, propsType>({
    form:"sendMessage"
})(SendMessageForm);

export default rSendMessageForm;