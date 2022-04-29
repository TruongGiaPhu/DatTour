const express=require('express')

const route=express.Router();
const ve=require('../../controllers/admin/ve')
const mid=require('../../middlewares/author')
route.get('/api/get',ve.getve)
route.put('/api/put/:id',ve.update)
route.delete('/api/delete/:id',ve.delete)
route.post('/api/post',ve.create)

module.exports=route