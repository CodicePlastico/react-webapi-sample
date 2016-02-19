var React = require('react');
var Hello = require('./Hello');
var Values = require('./Values');
module.exports = React.createClass({

    render: function () {
        return <div className="body-content">
            <Hello name="World" />
            <Hello name="Brescia" />
            <Values />
        </div>;
    }
});