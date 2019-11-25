import React from 'react';

import classes from './Home.module.css';

import background from '../../../assets/images/01-home.jpg';
import ButtonLink from '../../UI/ButtonLink/ButtonLink';
import Background from "../../UI/background/background";

const Home = props => {
    return (
        <div className={classes.Home} style={Background(background)}>
            <ButtonLink link="https://internetbanking.herabank.com/login" target="_blank">
                Acesse sua Conta
            </ButtonLink>

            <p>
                ou <strong>
                <a rel="noopener noreferrer"
                   href="https://play.google.com/store/apps/details?id=com.herabank.matera.quickstart&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target="_blank">
                    Cadastre-se
                </a>
                </strong>
            </p>
        </div>
    );
};

export default Home;