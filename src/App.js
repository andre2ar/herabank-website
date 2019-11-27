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

const App = () => (
    <Layout>
        <Switch>
            <Route path='/contact' exact render={() =>
                <Suspense fallback={<Spinner/>}>
                    <Contact />
                </Suspense>} />

            <Route path='/about' exact render={() =>
                <Suspense fallback={<Spinner/>}>
                    <About />
                </Suspense>} />

            <Route path='/faq' exact render={() =>
                <Suspense fallback={<Spinner/>}>
                    <Faq />
                </Suspense>} />

            <Route path='/terms-of-use' exact render={() =>
                <Suspense fallback={<Spinner/>}>
                    <TermsOfUse />
                </Suspense>} />

            <Route path='/service/:name' render={(props) =>
                <Suspense fallback={<Spinner/>}>
                    <Service {...props} />
                </Suspense>}/>

            <Route path='/service' render={(props) =>
                <Suspense fallback={<Spinner/>}>
                    <Service {...props} />
                </Suspense>}/>

            <Route path='/' render={() =>
                <Suspense fallback={<Spinner/>}>
                    <Home />
                </Suspense>} />
        </Switch>
    </Layout>
);

export default App;
