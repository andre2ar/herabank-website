import React from 'react';

import classes from './Button.module.css';

const Button = props => (
    <button className={classes.Button} type={props.type ? props.type : 'button'}>
        {props.children}
    </button>
);

export default Button;