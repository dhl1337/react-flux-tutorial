'use react';

var React = require('react');

var AboutPage = React.createClass({
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