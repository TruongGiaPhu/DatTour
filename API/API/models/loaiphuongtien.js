var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    {
        name: String,
    }
);

var Loaiphuongtien = mongoose.model('Loaiphuongtien', schema, 'loaiphuongtien');

module.exports = Loaiphuongtien;