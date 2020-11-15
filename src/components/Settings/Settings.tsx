import React, {ChangeEvent} from "react";
import classes from "./Settings.module.css";
import SetProfileForm from "./SetProfileForm";
import {profileType} from "../../redux/types/types";
type propsType = {
    setPhoto: (file:File) => void
    saveProfile: (profile:profileType) => void
    profile: profileType | null
}
let Settings:React.FC<propsType> = (props) => {
    const onSelect = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length){
            props.setPhoto( e.target.files[0]);
        }
    }
    const submitForm = (data:profileType) =>{
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
            {
                props.profile &&
                <SetProfileForm onSubmit = {submitForm}  profile={props.profile} initialValues = {props.profile}/>
            }
        </div>
    )
};
export default Settings;
