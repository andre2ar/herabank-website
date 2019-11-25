import React from 'react';

const Service = props => {
    let service = 'digital-account';
    if(props.match.params.name) {
        service = props.match.params.name;
    }

    const images = require.context('../../assets/images/services');

    let background = images(`./${service}.jpg`);

    /*switch (service) {
        case "digital-account":
            background = images('./')
            break;
        case "transfer-payments":
            background = require();
            break;
        case "credit-card-machine":
            background = require();
            break;
        case "credit-card":
            background = require();
            break;
        case "withdraw":
            background = require();
            break;
        case "top-up":
            background = require();
            break;
        case "boleto":
            background = require();
            break;
        case "ecommerce":
            background = require();
            break;
        case "auto-investiment":
            background = require();
            break;
        case "taggy":
            background = require();
            break;
        default:

            break;
    }*/

    return (
        <div style={{backgroundImage: `url(${background})`}}>

        </div>
    );
};

export default Service;