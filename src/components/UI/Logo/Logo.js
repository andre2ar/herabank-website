import React from 'react';

import classes from './Logo.module.css';

import heraBankLogo from '../../../assets/images/logo.png';

const Logo = () => (
    <div className={classes.Logo}>
        <img src={heraBankLogo} alt={"Hera Bank Logo"}/>
        <span className={classes.brand}>Hera Bank</span>
    </div>
);

export default Logo;