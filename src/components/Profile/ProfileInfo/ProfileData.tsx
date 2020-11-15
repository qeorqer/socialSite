import React, {ReactElement} from "react";
import classes from "./Profileinfo.module.css";
import {profileContacts, profileType} from "../../../redux/types/types";

type propsType = {
    profile: profileType
}
let ProfileData:React.FC<propsType> = ({profile}) => (
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
            {Object.keys(profile.contacts).some(el => profile.contacts[el as keyof profileContacts]) &&
            <h3>Contacts:</h3>
            }
            <ul>
                {Object.keys(profile.contacts).map(key => <ContactElement contactTitle={key}
                                                                          contactValue={profile.contacts[key as keyof profileContacts ]}
                                                                          key={key}/>)}
            </ul>
        </div>
    </>

)
type contElPropsType = {
    contactTitle: string
    contactValue:string
}
const ContactElement:React.FC<contElPropsType> = ({contactTitle, contactValue}):any => {
    if (!contactValue) {
        return ""
    }
    return <li><b>{contactTitle}</b>: <a href={contactValue} target="_blank">{contactValue} </a></li>


}
export default ProfileData;
