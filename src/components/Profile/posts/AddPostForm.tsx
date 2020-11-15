import classes from "./Posts.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormControls";
import {required} from "../../../utilits/validators/validators";
import React from "react";
import { addPostValuesType } from "./Posts";

type propsType = {

}
let AddPostForm:React.FC<InjectedFormProps<addPostValuesType, propsType> & propsType> = (props) =>(
    <form className={classes.addPost} onSubmit={props.handleSubmit} >
        <p>Add post</p>
        <Field component={Textarea} name="post" validate = {[required]}
               placeholder ="Write your thoughts"
        />
        <button>Add new</button>
    </form>
)

export default reduxForm<addPostValuesType, propsType>({form:"addPost"})(AddPostForm);
