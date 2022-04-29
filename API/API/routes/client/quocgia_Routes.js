var express = require('express')

var router = express.Router()
module.exports = router

const Khachhang = require('../../controllers/client/quocgia_Controller')

router.get('/getCountry', Khachhang.get_country)