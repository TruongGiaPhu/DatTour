const express = require('express');

const router = express.Router();
const ct=require('../../controllers/admin/ctv');

router.get('/api/get',ct.getve);

router.get('/api/getfromkhachhang',ct.getvefc);


module.exports = router;