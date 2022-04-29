var express = require('express')

var router = express.Router()
module.exports = router

const Tour = require('../../controllers/client/tour_Controller')

router.get('/getTour', Tour.get_tour)
router.get('/getTourId/:id', Tour.get_tour_id)
router.get('/getTourCountry/:quocgia_id',Tour.get_tour_country_id)
router.get('/getTourPrice/:price',Tour.get_tour_price)
router.get('/searchTourCountryName',Tour.search_tour_country_name)
router.get('/searchTourPrice',Tour.search_tour_price)
router.get('/searchTourName',Tour.search_tour_name)

