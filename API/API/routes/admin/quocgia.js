var express = require('express')

var router = express.Router()
module.exports = router
const mid=require('../../middlewares/author')
const qg = require('../../controllers/admin/quocgia')

router.get('/api/get', qg.find)
router.post('/api/post/', qg.create)
router.put('/api/put/:id', qg.update)
router.delete('/api/delete/:id', qg.delete)


