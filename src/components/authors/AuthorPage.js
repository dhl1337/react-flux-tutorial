'use strict';

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./AuthorList');

var AuthorPage = React.createClass({
    getInitialState() {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },

    componentWillMount() {
        AuthorStore.addChangeListener(this._onChange);
    },

    // Clean up when this component unmounted;
    componentWillUnmount() {
        AuthorStore.removeChangeListener(this._onChange);
    },

    _onChange () {
        this.setState({authors: AuthorStore.getAllAuthors()});
    },

    render: function () {

        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
});

module.exports = AuthorPage;