import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Spinner from "./components/UI/Spinner/Spinner";

const Home = React.lazy(() => import("./components/Pages/Home/Home"));
const Service = React.lazy(() => import('./components/Pages/Service/Sevice'));
const Contact = React.lazy(() => import('./components/Pages/Contact/Contact'));
const About = React.lazy(() => import('./components/Pages/About/About'));
const Faq = React.lazy(() => import('./components/Pages/FAQ/Faq'));
const TermsOfUse = React.lazy(() => import('./components/Pages/TermsOfUse/TermsOfUse'));
const Api = React.lazy(() => import('./components/Pages/API/Api'));

const App = () => (
    <Layout>
        <Suspense fallback={<Spinner/>}>
            <Switch>
                <Route path='/contact' exact render={() => <Contact />} />
                <Route path='/about' exact render={() => <About />} />
                <Route path='/service/:name' render={(props) => <Service {...props} />}/>
                <Route path='/service' render={(props) => <Service {...props} />}/>
                <Route path='/api' exact render={() => <Api /> } />
                <Route path='/faq' exact render={() => <Faq /> } />
                <Route path='/terms-of-use' exact render={() => <TermsOfUse /> } />
                <Route path='/' render={() => <Home /> } />
            </Switch>
        </Suspense>
    </Layout>
);

export default App;
