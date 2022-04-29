var khachhangdb=require('../../models/khachhang')

const ve=require('../../models/ve');


exports.find=(req,res)=>{
    if(req.query.id)
    {
        const id=req.query.id;
        khachhangdb.findById(id).then(data=>{
            if(!data){
                res.status('404').send({message: 'Not found khach hang with id '+id});
            }
            else{
                res.send(data);
            }
        }).catch(err=>{
            res.status(500).send({message:'Error retrieving khach hang with id'});
        })
    }
    else{
        khachhangdb.find().populate('quoctich_id').then(data=>{
           return res.send(data);
        }).catch(err=>{
            res.status(500).send({message:'Error retrieving khach hang information'});
        })
    }

}

exports.getfromqt=(req,res)=>{
    const id=req.query.id;
    khachhangdb.find({quoctich_id:id}).populate('quoctich_id').then(data=>{
        return res.send(data);
     }).catch(err=>{
         res.status(500).send({message:'Error retrieving khach hang information'});
     })
}




