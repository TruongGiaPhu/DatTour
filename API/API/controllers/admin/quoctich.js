
const qt = require('../../models/quoctich')
const kh=require('../../models/khachhang')
exports.create=async(req,res)=>{
    if(!req.body){
        res.status('400').send({message:'Cannot empty'});
    }
    const name=req.body.name
    var q=new qt({
        name:req.body.name
    })
    const checkName = await qt.findOne({name: name})
    if(checkName){
        res.json({msg:'quoc tich is exits'})
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
        qt.findById(id).then(data=>{
            if(!data){
                res.status('404').send({message: 'Not found qt with id '+id});
            }
            else{
                res.send(data);
            }
        }).catch(err=>{
            res.status(500).send({message:'Error retrieving qt with id'});
        })
    }else{
        qt.find().then(data=>{
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
    qt.findByIdAndUpdate(id,req.body).then(data=>{
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
    qt.findByIdAndDelete(id,req.body).then(data=>{
        if(!data){
            res.status(404).send({
                message:"Failed"
            })}
        else {res.send({message:"Successfully"});}
        })
}

