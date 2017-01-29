'use strict';

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;


var routes = (
    <Route name="app" path="/" handler={require('./components/App')}>
        <DefaultRoute handler={require('./components/HomePage')} />
        <Route name='authors' handler={require('./components/authors/AuthorPage')} />
        <Route name='about' handler={require('./components/about/AboutPage')} />
        <NotFoundRoute handler={require('./components/NotFoundPage')} />
    </Route>
)

module.exports = routes;