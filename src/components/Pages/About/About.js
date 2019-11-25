import React from 'react';

import classes from './About.module.css';

import Title from "../../UI/Title/Title";

import background from "../../../assets/images/12-use-terms.jpg";
import Background from "../../UI/background/background";

const About = () => (
    <div className={classes.About} style={Background(background)}>
        <Title>Quem somos</Title>
    </div>
);

export default About;