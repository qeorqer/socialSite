import React from "react";
import Loading from "../../Loading.svg";
import LoadingDark from "../../LoadingDark.svg";
import classes from "./preloader.module.css";

const Loader = (props) => (
    <div className = {classes.loader}>
        <img src = {props.lightTheme ? LoadingDark : Loading }  />      
    </div>
    
)

export default Loader;