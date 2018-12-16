import React from 'react';
import { Switch, Route } from "react-router-dom";
import { AboutPage } from './components'

const Router = ({ match }) => (
    <Switch>
        <Route path={`${match.url}`} component={AboutPage}/>
    </Switch>
);



export default Router;