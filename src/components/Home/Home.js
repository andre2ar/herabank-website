import React from 'react';

import classes from './Home.module.css';

import background from '../../assets/images/01-home.jpg';

const Home = props => {
    return (
        <div className={classes.Home} style={{backgroundImage: `url(${background})`}}>

        </div>
    );
};

export default Home;