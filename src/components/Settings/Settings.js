import React from "react";
import classes from "./Settings.module.css";
import SetProfileForm from "./SetProfileForm";

let Settings = (props) => {
    const onSelect = (e) => {
        props.setPhoto(e.target.files[0]);
    }
    const submitForm = (data) =>{
        props.saveProfile(data);
    }
    return (
        <div className={classes.settings}>
            <p className={classes.desc}>Here you can set your profile's data</p>
            <div className={classes.setImage}>
                <p>Click to choose a file:</p>
                <input type="file" id="avatar" onChange={onSelect}/>
                <label htmlFor="avatar">Select your avatar</label>
            </div>
            <SetProfileForm onSubmit = {submitForm} initialValues = {props.profile} profile={props.profile}/>
        </div>
    )
};
export default Settings;
