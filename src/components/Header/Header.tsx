import React from "react";
import classes from "./Header.module.css";
import LogoLight from "../../logo.png";
import LogoDark from "../../logo2.png";
import {NavLink} from "react-router-dom";
type propsType = {
    setTheme: () => void
    logOut: (userId?:number) => void
    darkTheme: boolean
    isAuth: boolean
}

let Header:React.FC<propsType> = (props) => {
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

            <NavLink to="/"><img src={props.darkTheme ? LogoDark : LogoLight} alt="logo"/></NavLink>
            <div className={classes.login}>
                <button className="changeTheme" onClick={() => {
                    props.setTheme()
                }}/>
                {props.isAuth ?
                    <p onClick={() => {props.logOut()}}>Log out</p>
                    :
                    <NavLink to="/login"> Log in </NavLink>
                }

            </div>
            <style media={props.darkTheme ? "screen" : "none"}>
                {style}
            </style>
        </header>
    )
}
export default Header;