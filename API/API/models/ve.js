var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    {
        price: String,
        price_kid:String,
        quantity: String,
        quantity_kid: String,
        loaive_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Loaiphuongtien"
        },
        ctve:[{
            SLNL:String,
            SLTE:String,
            dateCreate:{
                type:Date,
                default:Date.now
            },
            khachhang_id:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Khachhang"
            }
        }],
        tour_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Tour"
        }
    }
);

var Ve = mongoose.model('Ve', schema, 've');

module.exports = Ve;