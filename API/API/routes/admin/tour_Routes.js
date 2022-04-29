var express = require('express')

var router = express.Router()
module.exports = router

const Tour = require('../../controllers/admin/tour_controller')
const mid=require('../../middlewares/author')
router.get('/api/get', Tour.find)
router.post('/api/post/', Tour.create)
router.put('/api/put/:id', Tour.update)
router.delete('/api/delete/:id', Tour.delete)


