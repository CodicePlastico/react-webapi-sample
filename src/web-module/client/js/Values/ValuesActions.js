var sa = require('superagent');
var store = require('./ValuesStore');

module.exports = {
    loadValues: function() {
        sa.get('api/values').end(function(err, res) {
            store.setValues(res.body);
        });
    }
};