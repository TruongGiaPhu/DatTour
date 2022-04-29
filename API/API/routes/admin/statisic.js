var express = require('express')
var router = express.Router()
var con = require('../../controllers/admin/statisic')

const mid = require('../../middlewares/author')
router.get('/api/gettongkhachhang', con.tongkh);
router.get('/api/gettongtour', con.tongtour);
router.get('/api/gettongtourtheoquocgia', con.tongtourtheoquocgia);
router.get('/api/gettongtourdat', con.tongtourdat);
router.get('/api/gettongdoanhthu', con.tongdoanhthu);
router.get('/api/gettongdoanhthutheonam', con.tongdoanhthutheonam);
router.get('/api/gettongdoanhthutheothang', con.tongdoanhthutheothang);
router.get('/api/gettongdoanhthutheoquocgia', con.tongdoanhthutheoquocgia);
router.get('/api/gettongdoanhthutheothangnam', con.tongdoanhthutheothangnam);

module.exports = router