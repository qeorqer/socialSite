import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../common/FormsControls/FormControls";
import classes from "./Settings.module.css";
import React from "react";

let setProfileForm = (props) => (
    <form className={classes.setProfile} onSubmit={props.handleSubmit}>
        <div className={classes.mainSettings}>
            <div>
                <p>Fullname:</p>
                <Field component={Input} name="fullName" type="text" placeholder="Fullname"/>
            </div>
            <div>
                <p>About me:</p>
                <Field component={Textarea} name="aboutMe" placeholder="aboutMe"/>
            </div>
            <div className={classes.checkbox}>
                <label htmlFor="lookingJob"><b>Looking for a job:</b></label>
                <Field component={Input} name="lookingForAJob" id="lookingJob" type="checkbox"/>
            </div>
            <div>
                <p>Your skills:</p>
                <Field component={Textarea} name="lookingForAJobDescription" placeholder="Your professional skills"/>
            </div>

        </div>
        <div className={classes.contacts}>
            {props.profile &&
            Object.keys(props.profile.contacts).map((key, id) => (
                <div key={id}>
                    <p>{key}:</p>
                    <Field component={Input} name={`contacts.${key}`} type="text" placeholder={key}/>
                </div>
            ))}
        </div>
        <div className={classes.btnHolder}>
        <button>Save changes</button>
        {props.error &&
        <p>{props.error}</p>
        }
        </div>
    </form>
);
setProfileForm = reduxForm({form: "setProfile"})(setProfileForm);
export default setProfileForm;