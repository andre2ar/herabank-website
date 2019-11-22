import React from 'react';
import { NavLink } from "react-router-dom";
import classes from './Menu.module.css';

const Menu = (props) => (
    <li className={classes.Menu}>
        <NavLink exact={props.link !== '/service'} activeClassName={classes.active} to={props.link}>
            {props.children}
        </NavLink>
    </li>
);

export default Menu;