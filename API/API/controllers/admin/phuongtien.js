
const phuongtien = require('../../models/phuongtien');

exports.create=async(req,res)=>{
    if(!req.body){
        res.status('400').send({message:'Cannot empty'});
    }
    const name=req.body.name
    var q=new phuongtien({
        name: req.body.name,
        status: req.body.status,
        capacity: req.body.capacity,
        loaiphuongtien_id:req.body.loaiphuongtien_id
    })
    const checkName = await phuongtien.findOne({name: name})
    if(checkName){
        res.json({msg:'phuong tien is exits'})
    }else{
        q.save(q).then(data=>{
            res.send(data);
        }).catch(err=>{
            res.status(500).send({
                message:err.message|| "Some error occurred while creating a create operation"
            });
        })
    }
}

exports.find=(req,res)=>{

    if(req.query.id)
    {
        const id=req.query.id;
        phuongtien.findById(id).then(data=>{
            if(!data){
                res.status('404').send({message: 'Not found phuongtien with id '+id});
            }
            else{
                res.send(data);
            }
        }).catch(err=>{
            res.status(500).send({message:'Error retrieving phuongtien with id'});
        })
    }else{
        phuongtien.find().populate('loaiphuongtien_id').then(data=>{
            res.send(data);
        }).catch(err=>{
            res.status(500).send({message:'Error retrieving tour information'});
        })
    }
}

exports.update=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Connect can be empty"});
    }
    const id=req.params.id;
    phuongtien.findByIdAndUpdate(id,req.body).then(data=>{
        if(!data){
            res.status(404).send({
                message:err.message
            })}
        else {res.send(data);}
    }).catch(err=>{
        res.status(500).send({
            message:err.message|| "Some error occurred"
    })})
}

exports.delete=(req,res)=>{
    const id=req.params.id
    phuongtien.findByIdAndDelete(id,req.body).then(data=>{
        if(!data){
            res.status(404).send({
                message:err.message
            })}
        else {res.send({message:"Successfully"});}
        })
}

