import React from "react";
import classes from "./Settings.module.css";

let Settings = (props) => {
    const onSelect = (e) => {
    props.setPhoto(e.target.files[0]);
    }
    return (
        <div>
            <input type="file" name="avatar" onChange={onSelect}/>
            <label htmlFor="avatar">Choose your avatar</label>
        </div>
    )
};
export default Settings;
