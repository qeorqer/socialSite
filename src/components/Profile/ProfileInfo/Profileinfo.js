import React from "react";
import classes from "./Profileinfo.module.css";
import myLogo from "../../../firstUser/qeorqe.webp"
let ProfileInfo = (props) => (        
<div className={classes.ProfileInfo}>
    <div className={classes.logo}>
        <img src={myLogo} alt=""/>
    </div>
    <div className={classes.description}>
        <p>I create web-sites, web-applications, play the guitar, ride the longboard and do bunch of other weird stuff.</p>
    </div>
</div>
    
);
export default ProfileInfo;
