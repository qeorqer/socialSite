import classes from "./Posts.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormControls";
import {required} from "../../../utilits/validators/validators";
import React from "react";

let AddPostForm = (props) =>(
    <form className={classes.addPost} onSubmit={props.handleSubmit} >
        <p>Add post</p>
        <Field component={Textarea} name="post" validate = {[required]}
               placeholder ="Write your thoughts"
        />
        <button>Add new</button>
    </form>
)
AddPostForm = reduxForm({form:"addPost"})(AddPostForm);

export default  AddPostForm;