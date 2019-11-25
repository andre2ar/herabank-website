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
        let submenus = [];

        if(importedMenus[menuKey].submenu){
            for(let submenuKey in importedMenus[menuKey].submenu) {
                submenus.push(
                    <Menu key={submenuKey} link={importedMenus[menuKey].submenu[submenuKey].link}>
                        {importedMenus[menuKey].submenu[submenuKey].exibitionName}
                    </Menu>
                )
            }

            submenus = <ul>{submenus}</ul>
        }
        menus.push(
            <Menu key={menuKey} link={importedMenus[menuKey].link} submenus={submenus}>
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