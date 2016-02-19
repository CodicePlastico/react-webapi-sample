var jq = require('jquery');
jq(document).ready(function () {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var Content = require('./Content');
    ReactDOM.render(
      <Content />, document.getElementById('content')
    );
});
