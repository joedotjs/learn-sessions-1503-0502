var ajaxCall = function (cb) {
    var entries = [
        {
            title: Math.random().toString(),
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt esse expedita facilis itaque odit optio pariatur ratione ut vitae voluptatibus? Animi, hic id magnam minus modi nisi qui repudiandae totam!'
        },
        {
            title: Math.random().toString(),
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt esse expedita facilis itaque odit optio pariatur ratione ut vitae voluptatibus? Animi, hic id magnam minus modi nisi qui repudiandae totam!'
        },
        {
            title: Math.random().toString(),
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt esse expedita facilis itaque odit optio pariatur ratione ut vitae voluptatibus? Animi, hic id magnam minus modi nisi qui repudiandae totam!'
        },
        {
            title: Math.random().toString(),
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt esse expedita facilis itaque odit optio pariatur ratione ut vitae voluptatibus? Animi, hic id magnam minus modi nisi qui repudiandae totam!'
        }
    ];
    setTimeout(function () {
        cb(entries);
    }, 0);
};

var App = React.createClass({
    getInitialState: function () {
      return {
          entries: []
      };
    },
    componentDidMount: function () {
        var self = this;
        setInterval(function () {
            ajaxCall(function (blogEntries) {
                self.setState({ entries: blogEntries });
            });
        }, 0);
    },
    getEntries: function (entries) {
        return entries.map(function (blogEntry) {
            return <BlogArticle entry={blogEntry} />;
        });
    },
    render: function () {
        return (
            <div id="blog">
                {this.getEntries(this.state.entries)}
            </div>
        );
    }
});

var BlogArticle = React.createClass({
    render: function () {
        var timestamp = Date.now();
        return (
            <div>
                <BlogTitle title={this.props.entry.title} />
                <BlogBody text={this.props.entry.body} />
                <BlogTimestamp />
            </div>
        );
    }
});

var BlogTitle = React.createClass({
    render: function () {
        return <h1>{this.props.title}</h1>;
    }
});

var BlogBody = React.createClass({
    render: function () {
        return <p>{this.props.text}</p>;
    }
});

var BlogTimestamp = React.createClass({
    getInitialState: function () {
        return {
            currentTime: Date.now() // timestamp when this is called
        };
    },
    updateTime: function () {
        console.log(this);
        this.setState({ currentTime: Date.now() });
    },
    render: function () {
        return <h6 className="timestamp" onClick={this.updateTime} ref="the-header">{this.state.currentTime}</h6>;
    }
});

React.render(<App />, document.body);