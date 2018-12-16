import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { Switch, Route, Redirect } from "react-router-dom";
import { IntlProvider } from 'react-intl';
import AppLocale from '@/common/languageProvider';
import {router as routerFestival} from '@/app/Festivals';
import {router as routerArtists } from '@/app/Artists';
import {router as routerAbout} from '@/app/About';

import NoMatch from '@/common/components/NoMatch';
import NavBar from '@/common/components/NavBar';



const Router = ({ locale }) => {
    const defaultLocale = 'en';
    const currentAppLocale = AppLocale[locale.locale] || AppLocale[defaultLocale];

    return (
        <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}
        >
            <React.Fragment>
                <NavBar />
                <Switch>
                    <Route exact path="/" render={() => (
                        <Redirect to="/festivals" />
                    )} />
                    <Route path="/festivals" component={routerFestival} />
                    <Route path="/artists" component={routerArtists} />
                    <Route path="/about" component={routerAbout} />
                    <Route component={NoMatch} />
                </Switch>
            </React.Fragment>
        </IntlProvider>
    )
};

const mapStateToProps = ({ settings }) => {
    const { locale } = settings;
    return {
        locale,
    };
};

export default withRouter(connect(mapStateToProps, { })(Router));
