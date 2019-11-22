import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from "./containers/Layout/Layout";

import Home from "./components/Home/Home";
import Service from "./components/Service/Sevice";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Faq from "./components/FAQ/Faq";
import TermsOfUse from "./components/TermsOfUse/TermsOfUse";

const App = () => (
    <Layout>
        <Switch>
            <Route path='/contact' exact component={Contact} />
            <Route path='/about' exact component={About} />
            <Route path='/faq' exact component={Faq} />
            <Route path='/terms-of-use' exact component={TermsOfUse} />
            <Route path='/service/:name' exact component={Service}/>
            <Route path='/' exact component={Home} />
        </Switch>
    </Layout>
);

export default App;
