import React from "react";
import classes from "./Profileinfo.module.css";
import defaultLogo from "../../../firstUser/User_Cyber_Spy.png"
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

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
                <ProfileStatus status ={props.status} updateStatus = {props.updateStatus} />
                <h2>{props.profile.fullName}</h2>
            </div>
        </div>

    )
};
export default ProfileInfo;
