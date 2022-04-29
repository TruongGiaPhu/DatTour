var express = require('express')

var router = express.Router()
module.exports = router
const mid=require('../../middlewares/author')
const loaipt=require('../../controllers/admin/loaipt')
router.get('/api/get', loaipt.find)
router.post('/api/post/', loaipt.create)
router.put('/api/put/:id', loaipt.update)
router.delete('/api/delete/:id', loaipt.delete)


