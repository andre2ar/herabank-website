import React from 'react';
import Background from "../UI/background/background";

const Service = props => {
    let service = 'digital-account';
    if(props.match.params.name) {
        service = props.match.params.name;
    }

    const images = require.context('../../assets/images/services');

    let background = images(`./${service}.jpg`);

    return (
        <div style={Background(background)}>

        </div>
    );
};

export default Service;