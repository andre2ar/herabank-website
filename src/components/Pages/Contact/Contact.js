import React from 'react';

import Title from "../../UI/Title/Title";

import classes from './Contact.module.css';

import background from '../../../assets/images/contact.png';
import Background from "../../UI/background/background";

const Contact = () => (
    <div className={classes.Contact} style={Background(background)}>
        <Title>Contato</Title>
        <p>
            contato@herabank.com<br/>
            Av. Deputado Jamel Cecílio N: 2690 Salas 715/716<br/>
            Edf. Metropolitan Torre Tokio, Jardim Goiás<br/>
            CEP: 74810-100<br/>
            Goiânia-GO<br/>
            Brasil<br/>
        </p>
    </div>
);

export default Contact;