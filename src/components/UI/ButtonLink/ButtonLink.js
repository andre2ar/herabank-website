import React from 'react';
import {Link} from "react-router-dom";

import classes from './ButtonLink.module.css';

const Button = props =>{
    let target = "_self", rel = '';
    if(props.target === '_blank' || props.target === '') {
        target = props.target;
        rel = 'rel="noopener noreferrer"';

        return (
            <a  href={props.link}
                className={classes.ButtonLink}
                target={target} rel={rel}>
                {props.children}
            </a>
        );
    }else {
        return (
            <Link to={props.link}>{props.children}</Link>
        );
    }
};

export default Button;