var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    {
        name: String,
        gender: String,
        phone: String,
        email:{
            type: String,
            require:true,
            unique:true
        },
        identity: String,
        address: String,
        chucvu_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Chucvu"
        },
        username: {
            type: String,
            require:true,
            unique:true
        },
        password: String,
        img:String
    }
);

var Nhanvien = mongoose.model('Nhanvien', schema, 'nhanvien');

module.exports = Nhanvien;