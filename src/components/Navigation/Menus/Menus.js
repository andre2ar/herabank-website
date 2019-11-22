import React from 'react';

import classes from './Menus.module.css';

import { topMenus, footerMenus } from './menuList';
import Menu from "./Menu/Menu";

const Menus = props => {
    let importedMenus = null;
    if (!props.position || props.position === 'top') {
        importedMenus = topMenus;
    } else if (props.position === 'footer') {
        importedMenus = footerMenus;
    }

    const menus = [];
    for(let menuKey in importedMenus) {
        menus.push(
            <Menu key={menuKey} link={importedMenus[menuKey].link}>
                {importedMenus[menuKey].exibitionName}
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