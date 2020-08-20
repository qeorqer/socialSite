import React from "react";
import classes from "./Users.module.css";
import userLogo from "../../firstUser/User_Cyber_Spy.png";
import {NavLink} from "react-router-dom";
import Axios from "axios";

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

                                props.setFollowingLoad(true, el.id);
                                console.log(props.followingInProgress);
                                let baseUrl = `https://social-network.samuraijs.com/api/1.0/follow/${el.id}`;

                                    el.followed ?
                                        Axios.delete(baseUrl, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "ad2dcc3a-2e79-415a-9d4a-70589d65b1fe"
                                            }
                                        }).then((response) => {
                                            if (response.data.resultCode === 0) {
                                                props.toggleFollow(el.id);
                                                props.setFollowingLoad(false, el.id);
                                            }
                                        })
                                        :
                                        Axios.post(baseUrl, null, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "ad2dcc3a-2e79-415a-9d4a-70589d65b1fe"
                                            }
                                        }).then((response) => {
                                            if (response.data.resultCode === 0) {
                                                props.toggleFollow(el.id);
                                                props.setFollowingLoad(false, el.id);
                                            }
                                        });

                            }}
                        >
                            {el.followed ? "unfollow" : "follow"}
                        </button>
                    </div>
                </div>
            ))}
            <div className={classes.pagination}>
                {props.pages.map((el) => (
                    <span
                        className={props.currentPage == el ? classes.selected : ""}
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
