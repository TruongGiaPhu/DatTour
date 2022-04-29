var express = require('express')

var router = express.Router()
module.exports = router
const mid=require('../../middlewares/author')
const qt = require('../../controllers/admin/quoctich')

router.get('/api/get', qt.find)
router.post('/api/post/', qt.create)
router.put('/api/put/:id', qt.update)
router.delete('/api/delete/:id', qt.delete)


