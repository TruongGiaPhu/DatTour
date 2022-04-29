const express = require('express');
const tourRoutes = require('./tour_Routes');
const khachhangRoutes = require('./khachhang_Routes');
const quocgiaRoutes = require('./quocgia_Routes');
const veRoutes = require('./ve_Routes');
const viewRoutes = require('./view_Routes');


const client_router = express.Router();
client_router.use('/tour', tourRoutes);
client_router.use('/khachhang', khachhangRoutes);
client_router.use('/quocgia', quocgiaRoutes);
client_router.use('/ve', veRoutes);
client_router.use('/view', viewRoutes);

module.exports = client_router;