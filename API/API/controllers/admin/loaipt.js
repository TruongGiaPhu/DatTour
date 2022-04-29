
const type = require('../../models/loaiphuongtien');
const Phuongtien = require('../../models/phuongtien');
exports.create=async(req,res)=>{
    if(!req.body){
        res.status('400').send({message:'Cannot empty'});
    }
    const name=req.body.name
    var ty=new type({
        name:req.body.name
    })
    const checkName = await type.findOne({name: name})
    if(checkName){
        res.json({msg:'type is exits'})
    }else{
        ty.save(ty).then(data=>{
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
        type.findById(id).then(data=>{
            if(!data){
                res.status('404').send({message: 'Not found loai phuong tien with id '+id});
            }
            else{
                res.send(data);
            }
        }).catch(err=>{
            res.status(500).send({message:'Error retrieving loai phuong tien with id'});
        })
    }else{
        type.find().then(data=>{
            res.send(data);
        }).catch(err=>{
            res.status(500).send({message:'Error retrieving loai pt information'});
        })
    }

}

exports.update=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Connect can be empty"});
    }
    const id=req.params.id;
    type.findByIdAndUpdate(id,req.body).then(data=>{
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
    type.findByIdAndDelete(id,req.body).then(data=>{
        if(!data){
            res.status(404).send({
                message:"Failed"
            })}
        else {res.send({message:"Successfully"});}
        }).catch(err=>{message:'Have at least one error'})
    }

