import React from "react";
import classes from "./Header.module.css";
import LogoLight from "../../logo.png";
import LogoDark from "../../logo2.png";
import {NavLink} from "react-router-dom";

let Header = (props) => {
    let style = `
    :root {
      --main-bg-color: #3d4248;
      --secondary-bg-color: rgba(12, 11, 18, 0.85);;
      --main-txt-color: #fff;
      --content-bg:#0c0b12;
      --hover-color: #BD1E2C;
   }
   
   `
    return (
        <header>

            <NavLink to="/"><img src={props.lightTheme ? LogoDark : LogoLight} alt="logo"/></NavLink>
            <div className={classes.login}>
                <button className="changeTheme" onClick={() => {
                    props.setTheme()
                }}/>
                <NavLink to="/login">{props.isAuth ? "Log out" : "Log in"} </NavLink>
            </div>
            <style media={props.lightTheme ? "screen" : "none"}>
                {style}
            </style>
        </header>
    )
}
export default Header;