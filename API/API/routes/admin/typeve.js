const express=require('express')
const mid=require('../../middlewares/author')
const route=express.Router();
const type=require('../../controllers/admin/loaive')
route.get('/api/get',type.find)
route.put('/api/put',type.update)
route.delete('/api/delete',type.delete)
route.post('/api/post/:id/:id2',type.create)


module.exports=route