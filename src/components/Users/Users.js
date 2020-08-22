import React from "react";
import classes from "./Users.module.css";
import userLogo from "../../firstUser/User_Cyber_Spy.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {


    return (
        <div className={classes.users}>
            {props.users.map((el) => (

                <div key={el.id} className={classes.user}>

                    <div>
                        <NavLink to={"/profile/" + el.id}>
                            <img
                                src={el.photos.small ? el.photos.small : userLogo}
                                alt=""
                            />
                        </NavLink>
                    </div>
                    <div className={classes.info}>

                        <div><h3>{el.name}</h3></div>
                        <div><p>{el.status}</p></div>

                    </div>
                    <div className={classes.btnHolder}>
                        <button disabled={props.followingInProgress.some(id => id === el.id)}
                                onClick={() => {
                                    props.toggleFollow(el.followed, el.id)
                                }}>
                            {el.followed ? "unfollow" : "follow"}
                        </button>
                    </div>
                </div>
            ))}
            <div className={classes.pagination} >
                {props.pages.map((el,id) => (
                    <span key={id}
                        className={props.currentPage === el ? classes.selected : ""}
                        onClick={() => {
                            props.onPageChanged(el);
                        }}
                    >
                                {el}
                                </span>
                ))}
            </div>
        </div>

    );
}

export default Users;
