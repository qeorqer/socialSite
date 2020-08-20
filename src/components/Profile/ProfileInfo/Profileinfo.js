import React from "react";
import classes from "./Profileinfo.module.css";
import defaultLogo from "../../../firstUser/User_Cyber_Spy.png"
import Preloader from "../../preloader/Preloader";

let ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div className={classes.ProfileInfo}>
            <div className={classes.logo}>

                <img src={props.profile.photos.large ? props.profile.photos.large : defaultLogo} alt=""/>
            </div>
            <div className={classes.description}>
                <p>{props.profile.aboutMe}</p>
                <h2>{props.profile.fullName}</h2>
            </div>
        </div>

    )
};
export default ProfileInfo;
