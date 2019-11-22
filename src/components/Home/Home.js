import React from 'react';

import classes from './Home.module.css';

import home from '../../assets/images/home.jpg';

const Home = props => {
    return (
        <div className={classes.Home} style={{backgroundImage: `url(${home})`}}>

        </div>
    );
};

export default Home;