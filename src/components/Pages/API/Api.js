import React from 'react';

import classes from './Api.module.css';

import Title from "../../UI/Title/Title";

import background from "../../../assets/images/api.png";
import Background from "../../UI/background/background";
import ButtonLink from '../../UI/ButtonLink/ButtonLink';

const Api = () => (
    <div className={classes.API} style={Background(background)}>
        <Title>API</Title>
        <p>
            As APIs HERA BANK foram desenvolvidas para facilitar a integração com
            outras plataformas e o desenvolvimento de aplicações ligadas a todas
            as funcionalidades que nós oferecemos.
        </p>

        <div className={classes.links}>
            <ButtonLink link={"https://documenter.getpostman.com/view/6317281/SVzubh9R?version=latest"}
                        target={"_blank"} white>
                Conta digital
            </ButtonLink>

            <ButtonLink link={"https://documenter.getpostman.com/view/6317281/SVzuc2dD?version=latest"}
                        target={"_blank"} white>
                Maquinha
            </ButtonLink>
        </div>
    </div>
);

export default Api;