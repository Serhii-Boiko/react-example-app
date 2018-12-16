import React from 'react';
import { Switch, Route } from "react-router-dom";
import { ArtistsPage } from './containers';

const Router = ({ match }) => (
    <Switch>
        <Route path={`${match.url}`} component={ArtistsPage}/>
    </Switch>
);



export default Router;