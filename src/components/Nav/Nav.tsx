import React from "react";
import './Nav.css';
import { NavLink } from "react-router-dom";

let Nav = () => (
    <nav>
        <ul>
          <li><NavLink to="/profile">profile</NavLink></li>
          <li><NavLink to="/dialogs">messages</NavLink></li>
          <li><NavLink to="/news">news</NavLink></li>
          <li><NavLink to="/music">music</NavLink></li>
          <li><NavLink to="/users">find users</NavLink></li>
          <li><NavLink to="/settings">settings</NavLink></li>
        </ul>
      </nav>
)
export default Nav;