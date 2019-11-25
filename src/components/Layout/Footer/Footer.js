import React from 'react';
import classes from './Footer.module.css';
import Menus from "../Navigation/Menus/Menus";
import CopyRight from "./CopyRight/CopyRight";

const Footer = () => (
    <footer className={classes.Footer}>
        <CopyRight />

        <Menus position={'footer'} />
    </footer>
);

export default Footer;