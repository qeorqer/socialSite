import React from "react";
import classes from "./Users.module.css";
import Pagination from "../common/Paginator/Pagination";
import User from "./User";

const Users = (props) => {


    return (
        <div className={classes.users}>
            {props.users.map(el => <User key = {el.id}user={el} followingInProgress = {props.followingInProgress} toggleFollow = {props.toggleFollow}/>
            )}

            <Pagination totalCount={props.totalCount} pageSize={props.pageSize} currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}/>
        </div>

    );
}

export default Users;
