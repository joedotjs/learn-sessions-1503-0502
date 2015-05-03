var React = require('react');
var BlogTitle = require('./BlogTitle');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="blog-article">
                <BlogTitle title={this.props.entry.title} />
                <p>{this.props.entry.body}</p>
                <h6>{Date.now()}</h6>
            </div>
        );
    }
});