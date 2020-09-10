import React from "react";
import classes from "./Profileinfo.module.css";
import defaultLogo from "../../../firstUser/User_Cyber_Spy.png"
import ProfileStatus from "./ProfileStatus";
import {NavLink} from "react-router-dom";
import ProfileData from "./ProfileData";

let ProfileInfo = (props) => {

    return (
        <div className={classes.ProfileInfo}>
            <div className={classes.logo}>

                <img src={props.profile.photos.large ? props.profile.photos.large : defaultLogo} alt=""/>
            </div>
            <div className={classes.description}>
                <ProfileStatus status={props.status} isOwner={props.isOwner} updateStatus={props.updateStatus}/>
                <h2>{props.profile.fullName}</h2>
                <ProfileData profile = {props.profile} />
            </div>



            {
                //show settings gear if my page
                props.isOwner &&
                <NavLink to="settings" className={classes.settings}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                         style={{margin: "auto", background: "transparent", display: "block"}} width="30px"
                         height="30px"
                         viewBox="0 0 100 100">
                        <g transform="translate(50 50)">
                            <g>
                                <path
                                    d="M29.491524206117255 -5.5 L37.491524206117255 -5.5 L37.491524206117255 5.5 L29.491524206117255 5.5 A30 30 0 0 1 24.742744050198738 16.964569457146712 L24.742744050198738 16.964569457146712 L30.399598299691117 22.621423706639092 L22.621423706639096 30.399598299691114 L16.964569457146716 24.742744050198734 A30 30 0 0 1 5.5 29.491524206117255 L5.5 29.491524206117255 L5.5 37.491524206117255 L-5.499999999999997 37.491524206117255 L-5.499999999999997 29.491524206117255 A30 30 0 0 1 -16.964569457146705 24.742744050198738 L-16.964569457146705 24.742744050198738 L-22.621423706639085 30.399598299691117 L-30.399598299691117 22.621423706639092 L-24.742744050198738 16.964569457146712 A30 30 0 0 1 -29.491524206117255 5.500000000000009 L-29.491524206117255 5.500000000000009 L-37.491524206117255 5.50000000000001 L-37.491524206117255 -5.500000000000001 L-29.491524206117255 -5.500000000000002 A30 30 0 0 1 -24.742744050198738 -16.964569457146705 L-24.742744050198738 -16.964569457146705 L-30.399598299691117 -22.621423706639085 L-22.621423706639092 -30.399598299691117 L-16.964569457146712 -24.742744050198738 A30 30 0 0 1 -5.500000000000011 -29.491524206117255 L-5.500000000000011 -29.491524206117255 L-5.500000000000012 -37.491524206117255 L5.499999999999998 -37.491524206117255 L5.5 -29.491524206117255 A30 30 0 0 1 16.964569457146702 -24.74274405019874 L16.964569457146702 -24.74274405019874 L22.62142370663908 -30.39959829969112 L30.399598299691117 -22.6214237066391 L24.742744050198738 -16.964569457146716 A30 30 0 0 1 29.491524206117255 -5.500000000000013 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20"></path>
                            </g>
                        </g>
                    </svg>
                </NavLink>
            }
        </div>

    )
};

export default ProfileInfo;
