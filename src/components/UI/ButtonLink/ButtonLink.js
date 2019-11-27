import React from 'react';
import {Link} from "react-router-dom";

import classes from './ButtonLink.module.css';

const Button = props =>{
    let target = "_self", rel = '';
    let localClasses = [classes.ButtonLink];
    if(props.white) {
        localClasses.push(classes.White);
    }
    if(props.target === '_blank') {
        target = props.target;
        rel = 'rel="noopener noreferrer"';

        return (
            <a  href={props.link}
                className={localClasses.join(' ')}
                target={target} rel={rel}>
                {props.children}
            </a>
        );
    }else {
        return (
            <Link className={localClasses.join(' ')}
                  to={props.link}>
                {props.children}
            </Link>
        );
    }
};

export default Button;