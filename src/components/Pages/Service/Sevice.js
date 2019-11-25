import React from 'react';
import Background from "../../UI/background/background";

import Title from "../../UI/Title/Title";

import classes from './Service.module.css';

import servicesList from "./servicesList";

const Service = props => {
    let service = 'digital-account';
    if(props.match.params.name) {
        service = props.match.params.name;
    }

    const images = require.context('../../../assets/images/services');

    let background = images(`./${service}.jpg`);

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