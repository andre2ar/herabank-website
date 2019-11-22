import React from 'react';
import classes from './Toolbar.module.css';
import Logo from "../../Logo/Logo";
import Menus from "../Menus/Menus";

const Toolbar = () => (
    <header className={classes.Toolbar}>
        <nav>
            <Menus />
        </nav>

        <Logo/>
    </header>
);

export default Toolbar;