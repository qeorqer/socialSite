import React from "react";
import classes from "./Profileinfo.module.css";

let ProfileData = ({profile}) =>  (
        <>
            <div className={classes.profileData}>
                {
                    profile.aboutMe &&
                    <p><b>About me:</b> {profile.aboutMe}</p>
                }
                <p><b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}</p>
                {profile.lookingForAJob &&
                <p><b>What can I do:</b> {profile.lookingForAJobDescription}</p>
                }

            </div>
            <div className={classes.contacts}>
                {Object.keys(profile.contacts).some(el => profile.contacts[el]) &&
                <h3>Contacts:</h3>
            }
                <ul>
                    {Object.keys(profile.contacts).map(key => <ContactElement contactTitle={key} contactValue={profile.contacts[key]} key={key}/>)}
                </ul>
            </div>
           </>

    )

const ContactElement = ({contactTitle, contactValue}) => {
    if (!contactValue) {
        return ""
    }
    return <li><b>{contactTitle}</b>: <a href={contactValue} target="_blank">{contactValue} </a></li>


}
export default ProfileData;
