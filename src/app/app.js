import React from 'react';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import Router from '@/app/router'

import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';

const App = ({ store, history }) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Router />
        </ConnectedRouter>
    </Provider>
);

export default hot(module)(App);
