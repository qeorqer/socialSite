import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import PostsContainer from "./posts/PostsContainer";

let Profile = (props) => (

  <div className={classes.content}>
   
    <ProfileInfo profile = {props.profile}/>
    <PostsContainer />
  </div>
);
export default Profile;
