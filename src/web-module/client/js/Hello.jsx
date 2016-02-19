var React = require('react');
var Hello = React.createClass({
    render: function() {
        return <div>Hello, <em>{this.props.name}</em>!!!</div>;
    }
});

module.exports = Hello;