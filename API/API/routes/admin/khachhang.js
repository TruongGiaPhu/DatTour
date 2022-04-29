
var express = require('express')

const route = express.Router()
const mid=require('../../middlewares/author')
const contr=require('../../controllers/admin/khachhang');
route.get("/api/get",contr.find);
route.get("/api/getfromquoctich",contr.getfromqt);

module.exports = route