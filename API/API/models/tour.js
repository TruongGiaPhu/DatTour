var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    {
        name: {
            type: String,
            require:true,
            unique:true
        },
        itinerary: String,
        price:String,
        price_kid:String,
        description: String,
        service: String,
        img: String,
        img1: String,
        img2: String,
        img3: String,
        quocgia_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Quocgia"
        },
        phuongtien_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Phuongtien"
        }
    }
);

var Tour = mongoose.model('Tour', schema, 'tour');

module.exports = Tour;