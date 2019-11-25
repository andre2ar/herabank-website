import React from 'react';

import classes from './ButtonLink.module.css';

const Button = props =>{
    let target = "_self", rel = '';
    if(props.target === '_blank') {
        target = props.target;
        rel = 'rel="noopener noreferrer"';
    }
    return (
        <a  href={props.link}
            className={classes.ButtonLink}
            target={target} rel={rel}>
            {props.children}
        </a>
    );
};

export default Button;