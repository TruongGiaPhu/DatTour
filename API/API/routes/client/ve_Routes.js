var express = require('express')

var router = express.Router()
module.exports = router

const Ve = require('../../controllers/client/ve_Controller')

router.post('/bookTour/', Ve.bookTour)
router.delete('/deleteTour/', Ve.deleteTour)
router.post('/historyTour/', Ve.getDetailVe)
