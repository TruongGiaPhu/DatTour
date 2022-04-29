var express = require('express')

var router = express.Router()
module.exports = router
const mid=require('../../middlewares/author')
const phuongtien=require('../../controllers/admin/phuongtien')

router.get('/api/get', phuongtien.find)
router.post('/api/post/', phuongtien.create)
router.put('/api/put/:id', phuongtien.update)
router.delete('/api/delete/:id', phuongtien.delete)


