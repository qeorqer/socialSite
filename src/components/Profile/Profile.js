import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/Profileinfo";
import PostsContainer from "./posts/PostsContainer";

let Profile = () => (
  <div className={classes.content}>
   
    <ProfileInfo />
    <PostsContainer />
  </div>
);
export default Profile;
