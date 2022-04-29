const express = require('express');
const client = require('./client/index')
const admin = require('./admin/index');

const router = express.Router();
router.use('/client', client);
router.use('/admin', admin);

module.exports = router;