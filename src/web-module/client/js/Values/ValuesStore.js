var _values = [];
var _subscribers = [];

function setValues(values) {
    _values = values;
    _subscribers.forEach(function(sub) {
        sub(_values);
    });
}

function getValues() {
    return _values;
}

function watch(subscriber) {
    _subscribers.push(subscriber);
    return function() {
        _subscribers.splice(_subscribers.indexOf(subscriber), 1);
    }
}

module.exports = {
    getValues: getValues,
    setValues: setValues,
    watch: watch
};