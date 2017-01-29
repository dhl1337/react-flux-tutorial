'use strict';

var React = require('react');
var Router = require('react-router');
var Default = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
    <Route name='app' path='/' handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/HomePage')} />
        <Route name='authors' handler={require('./components/AuthorPage')} />
        <Route name='about' handler={require('./components/about/AboutPage')} />
    </Route>
)

module.exports = routes;