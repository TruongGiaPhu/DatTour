var express = require('express')

var router = express.Router()
module.exports = router

const Khachhang = require('../../controllers/client/view_khachhang')



router.get('/get_khachhangr', Khachhang.get_khachhang)
router.get('/get_khachhang_id/:id', Khachhang.get_khachhang_id)
router.get('/get_quoctich_id/:id', Khachhang.get_quoctich_id)