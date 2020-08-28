import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import PostsContainer from "./posts/PostsContainer";

let Profile = (props) => {
    return(

        <div className={classes.content}>

            <ProfileInfo profile={props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
            <PostsContainer/>
        </div>
    );
}
export default Profile;
