const ve=require('../../models/ve');
const kh=require('../../models/khachhang');
exports.getvefc=(req,res)=>{
   
        const id=req.query.id;
        const khachhang_id = req.body.khachhang_id
        ve.findById(id).populate({path:'ctve', populate:{path:'khachhang_id', model:kh}}).then(data=>{
                for(var i=0;i<data.ctve.length;i++){
                    if(data.ctve[i].khachhang_id != khachhang_id){
                        data.ctve.pop(i)
                    }
                }
            res.send(data.ctve);
        }).catch(err=>{
            res.status(500).send({message:'Error retrieving ve information'});
        })
}

exports.getve=(req,res)=>{
  
    const id=req.query.id;
    ve.findById(id).populate({path:'ctve', populate:{path:'khachhang_id', model:kh}}).then(data=>{
        res.send(data.ctve);
    }).catch(err=>{
        res.status(500).send({message:'Error retrieving ve information'});
    })
}