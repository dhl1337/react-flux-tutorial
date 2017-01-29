'use react';

var React = require('react');

var AboutPage = React.createClass({
    statics: {
        willTransitionTo: function (transition, params, query, callback) {
            if (!confirm('Are you sure you read a page that\'s this boring?')) {
                transition.abort();
            } else {
                callback();
            }
        },
        willTransitionFrom: function (transition, component) {
            if (!confirm('Are you sure you leave a that this exciting?')) {
                transition.abort();
            }
        }
    },
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p>This application uses the following technologies:</p>
            </div>
        );
    }
});

module.exports = AboutPage;