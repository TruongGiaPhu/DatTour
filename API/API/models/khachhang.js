var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    {
        name: String,
        gender: String,
        phone: String,
        email: String,
        identity: String,
        address: String,
        username: String,
        password: String,
        quoctich_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Quoctich"
        }
    }
);

var Khachhang = mongoose.model('Khachhang', schema, 'khachhang');

module.exports = Khachhang;