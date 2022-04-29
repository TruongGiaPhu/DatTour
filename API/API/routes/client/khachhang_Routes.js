var express = require('express')

var router = express.Router()
module.exports = router

const Khachhang = require('../../controllers/client/khachhang_Controller')

router.post('/login', Khachhang.login)
router.post('/register', Khachhang.register)
router.get('/getKhachHang', Khachhang.get_khachhang)
router.get('/getKhachHangId/:id', Khachhang.get_khachhang_id)
router.get('/getHistory/KHBook/:id', Khachhang.history_khachhang_book)