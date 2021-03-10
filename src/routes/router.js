import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import _ from 'lodash';
import Layout from '../components/shared/layout.js';
import AnonymousLayout from '../components/shared/anonymous_layout';

import publicRoutes from './publicRoutes';
import privateRoutes from './privateRoutes';
import sessionRoutes from './sessionRoutes';
 
import NotFound from '../views/error/not-found';
import { checkAuth } from '../redux/actions/account/user_actions'

import { connect } from 'react-redux';

class Router extends React.Component {
    checkAuth(component, route) {
        if (this.props.onCheckAuth()) {
            return <Layout
                component={component}
                route={route}
            />
        } else
            return <Redirect to="/sign-in" />
    }

    privateRouteCheck(component, route) {
        //permission check olayını implemente edince buraya bir method bağlayacağız.
        var usePermissionCheck = true;
        if (this.props.user.loggedIn) {
            if (this.props.onCheckAuth()) {
                if (usePermissionCheck)
                    return <Layout
                        component={component}
                        route={route}
                    />
                else
                    return <Redirect to="/permission-denied" />
            } else
                return <Redirect to="/sign-in" />
        } else
            return <Redirect to="/sign-in" />
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {_.map(publicRoutes, (route, key) => {
                        const { component, path } = route;
                        return (
                            <Route
                                exact
                                path={path}
                                key={key}
                                render={(route) => this.checkAuth(component, route)}
                            />
                        )
                    })}
                    {_.map(privateRoutes, (route, key) => {
                        const { component, path } = route;
                        return (
                            <Route
                                exact
                                path={path}
                                key={key}
                                render={(route) => this.privateRouteCheck(component, route)}
                            />
                        )
                    })}
                    {_.map(sessionRoutes, (route, key) => {
                        const { component, path } = route;
                        return (
                            <Route
                                exact
                                path={path}
                                key={key}
                                render={(route) =>
                                    this.props.user.loggedIn ? (
                                        <>
                                            {window.open('/', '_self', false)}
                                        </>
                                    ) : (
                                            <AnonymousLayout
                                                component={component}
                                                route={route}
                                            />
                                        )
                                }
                            />
                        )
                    })}
                    <Route render={(route) =>
                        <AnonymousLayout
                            component={NotFound}
                            route={route}
                            renderAppBar
                        />
                    } />
                </Switch>
            </BrowserRouter>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    };
}
const mapDispatchToProps = {
    onCheckAuth: checkAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);