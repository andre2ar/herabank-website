import React from 'react';

import classes from './About.module.css';

import Title from "../../UI/Title/Title";

import background from "../../../assets/images/about.png";
import Background from "../../UI/background/background";

const About = () => (
    <div className={classes.About} style={Background(background)}>
        <Title>Quem somos</Title>
        <p>
            O HERA BANK é uma Instituição de Pagamentos que agrega além da conta digital,
            máquina de cartão para sua empresa e cartão de crédito pré-pago. Um sistema
            de serviços completos para você e seu negócio
        </p>
    </div>
);

export default About;