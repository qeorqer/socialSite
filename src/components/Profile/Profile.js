import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import PostsContainer from "./posts/PostsContainer";
import Preloader from "../common/preloader/Preloader";

let Profile = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return(

        <div className={classes.content}>

            <ProfileInfo profile={props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
            <PostsContainer/>
        </div>
    );
}
export default Profile;
