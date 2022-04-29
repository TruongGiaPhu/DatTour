var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    {
        name: String,
    }
);

var Quoctich = mongoose.model('Quoctich', schema, 'quoctich');

module.exports = Quoctich;