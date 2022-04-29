
const type = require('../../models/loaive')
const ve = require('../../models/ve')

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
                res.status('404').send({message: 'Not found loai ve with id '+id});
            }
            else{
                res.send(data);
            }
        }).catch(err=>{
            res.status(500).send({message:'Error retrieving loai ve with id'});
        })
    }else{
        type.find().then(data=>{
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
                message:err.message
            })}
        else {
                res.send({message:"Successfully"});}
                });
             }

