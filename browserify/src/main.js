var React = require('react');
var BlogArticle = require('./components/BlogArticle');
var entries = require('./data/entries.json');

var request = require('request');

request.get('http://localhost:8080/');


var App = React.createClass({
    createEntries() {
      return entries.map(e => <BlogArticle entry={e} />);
    },
    render() {
        return (
            <div id="blog">
                {this.createEntries()}
            </div>
        );
    }
});

React.render(<App />, document.body);