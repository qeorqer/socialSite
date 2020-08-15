import React from "react";
import "./Header.module.css";
import LogoLight from "../../logo.png";
import LogoDark from "../../logo2.png";

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
  return(
    <header>
    <a href="/"><img src={props.lightTheme ? LogoDark : LogoLight} alt="logo"/></a>
    <button className="changeTheme" onClick= {() => {props.setTheme() }}></button>
    <style media={props.lightTheme ? "screen" : "none"}> 
    {style}
   </style>
  </header>
  )
  }
export default Header;