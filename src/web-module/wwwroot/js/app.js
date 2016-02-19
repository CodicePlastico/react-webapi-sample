(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var jq = require('jquery');
jq(document).ready(function () {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var Content = require('./Content');
    ReactDOM.render(React.createElement(Content, null), document.getElementById('content'));
});

},{"./Content":2,"jquery":"jquery","react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
var React = require('react');
var Hello = require('./Hello');
var Values = require('./Values/ValuesList');
module.exports = React.createClass({
    displayName: 'exports',

    render: function render() {
        return React.createElement(
            'div',
            { className: 'body-content' },
            React.createElement(Hello, { name: 'World' }),
            React.createElement(Hello, { name: 'Brescia' }),
            React.createElement(Values, null)
        );
    }
});

},{"./Hello":3,"./Values/ValuesList":5,"react":"react"}],3:[function(require,module,exports){
var React = require('react');
var Hello = React.createClass({
    displayName: 'Hello',

    render: function render() {
        return React.createElement(
            'div',
            null,
            'Hello, ',
            React.createElement(
                'em',
                null,
                this.props.name
            ),
            '!!!'
        );
    }
});

module.exports = Hello;

},{"react":"react"}],4:[function(require,module,exports){
var sa = require('superagent');
var store = require('./ValuesStore');

module.exports = {
    loadValues: function loadValues() {
        sa.get('api/values').end(function (err, res) {
            store.setValues(res.body);
        });
    }
};

},{"./ValuesStore":6,"superagent":"superagent"}],5:[function(require,module,exports){
var React = require('react');
var store = require('./ValuesStore');
var actions = require('./ValuesActions');

var Value = React.createClass({
    displayName: 'Value',

    render: function render() {
        return React.createElement(
            'li',
            null,
            this.props.val
        );
    }
});

module.exports = React.createClass({
    displayName: 'exports',

    getInitialState: function getInitialState() {
        return {
            values: []
        };
    },
    componentDidMount: function componentDidMount() {
        this.unregister = store.watch(this.onStoreChange);
        actions.loadValues();
    },
    onStoreChange: function onStoreChange(values) {
        this.setState({
            values: values
        });
    },
    componentWillUnmount: function componentWillUnmount() {
        if (this.unregister) {
            this.unregister();
        }
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'values' },
            React.createElement(
                'ol',
                null,
                this.state.values.map(function (v) {
                    return React.createElement(Value, { val: v });
                })
            )
        );
    }
});

},{"./ValuesActions":4,"./ValuesStore":6,"react":"react"}],6:[function(require,module,exports){
var _values = [];
var _subscribers = [];

function setValues(values) {
    _values = values;
    _subscribers.forEach(function (sub) {
        sub(_values);
    });
}

function getValues() {
    return _values;
}

function watch(subscriber) {
    _subscribers.push(subscriber);
    return function () {
        _subscribers.splice(_subscribers.indexOf(subscriber), 1);
    };
}

module.exports = {
    getValues: getValues,
    setValues: setValues,
    watch: watch
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIudGVtcC9qcy9BcHAuanMiLCIudGVtcC9qcy9Db250ZW50LmpzIiwiLnRlbXAvanMvSGVsbG8uanMiLCIudGVtcC9qcy9WYWx1ZXMvVmFsdWVzQWN0aW9ucy5qcyIsIi50ZW1wL2pzL1ZhbHVlcy9WYWx1ZXNMaXN0LmpzIiwiLnRlbXAvanMvVmFsdWVzL1ZhbHVlc1N0b3JlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBqcSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuanEoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuICAgIHZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuICAgIHZhciBDb250ZW50ID0gcmVxdWlyZSgnLi9Db250ZW50Jyk7XG4gICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwgbnVsbCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykpO1xufSk7XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEhlbGxvID0gcmVxdWlyZSgnLi9IZWxsbycpO1xudmFyIFZhbHVlcyA9IHJlcXVpcmUoJy4vVmFsdWVzL1ZhbHVlc0xpc3QnKTtcbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnZXhwb3J0cycsXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAnYm9keS1jb250ZW50JyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWxsbywgeyBuYW1lOiAnV29ybGQnIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWxsbywgeyBuYW1lOiAnQnJlc2NpYScgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFZhbHVlcywgbnVsbClcbiAgICAgICAgKTtcbiAgICB9XG59KTtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgSGVsbG8gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdIZWxsbycsXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAnSGVsbG8sICcsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdlbScsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm5hbWVcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICAnISEhJ1xuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhlbGxvO1xuIiwidmFyIHNhID0gcmVxdWlyZSgnc3VwZXJhZ2VudCcpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi9WYWx1ZXNTdG9yZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBsb2FkVmFsdWVzOiBmdW5jdGlvbiBsb2FkVmFsdWVzKCkge1xuICAgICAgICBzYS5nZXQoJ2FwaS92YWx1ZXMnKS5lbmQoZnVuY3Rpb24gKGVyciwgcmVzKSB7XG4gICAgICAgICAgICBzdG9yZS5zZXRWYWx1ZXMocmVzLmJvZHkpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4vVmFsdWVzU3RvcmUnKTtcbnZhciBhY3Rpb25zID0gcmVxdWlyZSgnLi9WYWx1ZXNBY3Rpb25zJyk7XG5cbnZhciBWYWx1ZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBkaXNwbGF5TmFtZTogJ1ZhbHVlJyxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdsaScsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy52YWxcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZGlzcGxheU5hbWU6ICdleHBvcnRzJyxcblxuICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWVzOiBbXVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnVucmVnaXN0ZXIgPSBzdG9yZS53YXRjaCh0aGlzLm9uU3RvcmVDaGFuZ2UpO1xuICAgICAgICBhY3Rpb25zLmxvYWRWYWx1ZXMoKTtcbiAgICB9LFxuICAgIG9uU3RvcmVDaGFuZ2U6IGZ1bmN0aW9uIG9uU3RvcmVDaGFuZ2UodmFsdWVzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmFsdWVzOiB2YWx1ZXNcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnVucmVnaXN0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMudW5yZWdpc3RlcigpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiAndmFsdWVzJyB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnb2wnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZXMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFZhbHVlLCB7IHZhbDogdiB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cbn0pO1xuIiwidmFyIF92YWx1ZXMgPSBbXTtcbnZhciBfc3Vic2NyaWJlcnMgPSBbXTtcblxuZnVuY3Rpb24gc2V0VmFsdWVzKHZhbHVlcykge1xuICAgIF92YWx1ZXMgPSB2YWx1ZXM7XG4gICAgX3N1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1Yikge1xuICAgICAgICBzdWIoX3ZhbHVlcyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlcygpIHtcbiAgICByZXR1cm4gX3ZhbHVlcztcbn1cblxuZnVuY3Rpb24gd2F0Y2goc3Vic2NyaWJlcikge1xuICAgIF9zdWJzY3JpYmVycy5wdXNoKHN1YnNjcmliZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdWJzY3JpYmVycy5zcGxpY2UoX3N1YnNjcmliZXJzLmluZGV4T2Yoc3Vic2NyaWJlciksIDEpO1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGdldFZhbHVlczogZ2V0VmFsdWVzLFxuICAgIHNldFZhbHVlczogc2V0VmFsdWVzLFxuICAgIHdhdGNoOiB3YXRjaFxufTtcbiJdfQ==
