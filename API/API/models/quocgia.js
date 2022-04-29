var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    {
        name: String,
    }
);

var Quocgia = mongoose.model('Quocgia', schema, 'quocgia');

module.exports = Quocgia;