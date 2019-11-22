import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from "./containers/Layout/Layout";

import Home from "./components/Home/Home";
import Service from "./components/Service/Sevice";

const App = () => (
    <Layout>
        <Switch>
            <Route path='/service' component={Service}/>
            <Route path='/' exact component={Home} />
        </Switch>
    </Layout>
);

export default App;
