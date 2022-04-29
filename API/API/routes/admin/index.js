const express = require('express');
const tourRoutes = require('./tour_Routes');

const admin_router = express.Router();

admin_router.use('/khach_hang',require('./khachhang'));
admin_router.use('/nhan_vien',require('./nhanvien'));
admin_router.use('/tour',require('./tour_Routes'));
admin_router.use('/ve',require('./ve'));

admin_router.use('/quoctich',require('./quoctich'));

admin_router.use('/quocgia',require('./quocgia'));

admin_router.use('/phuongtien',require('./phuongtien'));
admin_router.use('/loaiphuongtien',require('./loaiphuongtien'));
admin_router.use('/ctve',require('./ctv'));

admin_router.use('/typeve',require('./typeve'));
// admin_router.use('/detail_tour',require('./detail_tour'));
admin_router.use('/statistic',require('./statisic'));

module.exports = admin_router;