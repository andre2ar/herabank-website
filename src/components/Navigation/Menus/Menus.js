import React from 'react';

import classes from './Menus.module.css';

import { topMenus } from './menuList';
import Menu from "./Menu/Menu";

const Menus = props => {
    const menus = [];
    for(let menuKey in topMenus) {
        console.log(topMenus[menuKey]);
        menus.push(
            <Menu link={topMenus[menuKey].link}>
                {topMenus[menuKey].exibitionName}
            </Menu>
        );
    }

    return (
        <ul className={classes.Menus}>
            {menus}
        </ul>
    );
};

export default Menus;