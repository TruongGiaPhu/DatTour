var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    {
        name: String,
        address: String,
        phone: String
    }
);

var Khachsan = mongoose.model('Khachsan', schema, 'khachsan');

module.exports = Khachsan;