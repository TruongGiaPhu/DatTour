var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    {
        name: String,
        status: String,
        capacity: String,
        loaiphuongtien_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Loaiphuongtien"
        }
    }
);

var Phuongtien = mongoose.model('Phuongtien', schema, 'phuongtien');

module.exports = Phuongtien;