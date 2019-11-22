import React from 'react';

import classes from './Menus.module.css';

import { topMenus, footerMenus } from './menuList';
import Menu from "./Menu/Menu";

const Menus = props => {
    let importedMenus = null;
    let classesNames = [classes.Menus];
    if (!props.position || props.position === 'top') {
        importedMenus = topMenus;
        classesNames.push(classes.MenuTop);
    } else if (props.position === 'footer') {
        importedMenus = footerMenus;
        classesNames.push(classes.MenuFooter);
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
        <ul className={classesNames.join(' ')}>
            {menus}
        </ul>
    );
};

export default Menus;