import React from "react";
import classes from "./Users.module.css";
import userLogo from "../../firstUser/User_Cyber_Spy.png";
import {NavLink} from "react-router-dom";
import {userType} from "../../redux/types/types";

type propsType = {
    user: userType
    followingInProgress:Array<number>
    toggleFollow:(flag:boolean, id:number) => void
}
const User: React.FC<propsType> = ({user, followingInProgress, toggleFollow}) => (
    <div className={classes.user}>
        <div>
            <NavLink to={"/profile/" + user.id}>
                <img
                    src={user.photos.small ? user.photos.small : userLogo}
                    alt=""
                />
            </NavLink>
        </div>
        <div className={classes.info}>

            <div><h3>{user.name}</h3></div>
            <div><p>{user.status}</p></div>

        </div>
        <div className={classes.btnHolder}>
            <button disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => {
                        toggleFollow(user.followed, user.id)
                    }}>
                {user.followed ? "unfollow" : "follow"}
            </button>
        </div>
    </div>
);


export default User;
