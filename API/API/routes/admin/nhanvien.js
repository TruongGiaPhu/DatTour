var express = require('express')

var route = express.Router()
const con = require('../../controllers/admin/nhanvien')
const mid = require('../../middlewares/author')
route.post('/api/login', con.login)

route.post('/api/post', con.create);

route.get('/api/get', con.find);

route.put('/api/put/:id', con.update);

route.delete('/api/delete/:id', con.delete);

route.put('/api/change_password/:id', con.changepassword);

route.delete('/api/logout', con.logout);
module.exports = route