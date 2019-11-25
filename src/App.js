import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from "./components/Layout/Layout";

import Home from "./components/Pages/Home/Home";
import Service from "./components/Pages/Service/Sevice";
import Contact from "./components/Pages/Contact/Contact";
import About from "./components/Pages/About/About";
import Faq from "./components/Pages/FAQ/Faq";
import TermsOfUse from "./components/Pages/TermsOfUse/TermsOfUse";

const App = () => (
    <Layout>
        <Switch>
            <Route path='/contact' exact component={Contact} />
            <Route path='/about' exact component={About} />
            <Route path='/faq' exact component={Faq} />
            <Route path='/terms-of-use' exact component={TermsOfUse} />
            <Route path='/service/:name' component={Service}/>
            <Route path='/service' component={Service}/>
            <Route path='/' exact component={Home} />
        </Switch>
    </Layout>
);

export default App;
