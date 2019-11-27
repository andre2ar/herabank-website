import React from 'react';
import Background from "../../UI/background/background";

import Title from "../../UI/Title/Title";

import classes from './Service.module.css';

import servicesList from "./servicesList";

const Service = props => {
    let service = 'digital-account', background = null;
    if(props.match.params.name) {
        service = props.match.params.name;
    }

    const images = require.context('../../../assets/images/services');

    try {
        background = images(`./${service}.png`);
    } catch (e) {
        service = 'digital-account';
        background = background = images(`./${service}.png`);
    }

    return (
        <div className={classes.Service} style={Background(background)}>
            <Title>{servicesList[service].title}</Title>

            <p>
                {servicesList[service].details}
            </p>
        </div>
    );
};

export default Service;