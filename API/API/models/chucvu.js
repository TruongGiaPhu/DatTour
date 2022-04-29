var mongoose = require('mongoose');

var schema = new mongoose.Schema(
    {
        name:String,
    }
);

var Chucvu = mongoose.model('Chucvu', schema, 'chucvu');

module.exports = Chucvu;