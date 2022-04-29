var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    {
        name: String,

    }
);

var Loaive = mongoose.model('Loaive', schema, 'loaive');

module.exports = Loaive;