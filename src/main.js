$ = jQuery = require('jquery'); // define jquery globally.

var React = require('react');
var HomePage = require('./components/HomePage');

React.render(<HomePage/>, document.getElementById('app'));