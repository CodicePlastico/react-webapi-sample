var React = require('react');
var store = require('./ValuesStore');
var actions = require('./ValuesActions');

var Value = React.createClass({
    render: function () {
        return <li>{this.props.val}</li>
    }
});

module.exports = React.createClass({
    getInitialState: function () {
        return {
            values: []
        };
    },
    componentDidMount: function () {
        this.unregister = store.watch(this.onStoreChange)
        actions.loadValues();
    },
    onStoreChange: function (values) {
        this.setState({
            values: values
        });
    },
    componentWillUnmount: function () {
        if (this.unregister) {
            this.unregister();
        }
    },
    render: function () {
        return <div className="values">
            <ol>
                {this.state.values.map(function (v) { return <Value val={v } />;})}
            </ol>
        </div>;
    }
});