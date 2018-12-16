import React from 'react';
import { Switch, Route } from "react-router-dom";
import {FestivalPage, FestivalsPage} from './containers'

const Router = ({ match }) => (
    <Switch>
        <Route path={`${match.url}/:uuid`} component={FestivalPage} />
        <Route path={`${match.url}`} component={FestivalsPage}/>
    </Switch>
);



export default Router;
