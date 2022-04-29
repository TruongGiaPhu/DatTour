// var cttdb=require('../../models/tour')

// module.exports.detail = (req, res) =>{
//     const id = req.params.id
    
//      cttdb.findById(id).then(data=>{
//         if(!data){
//             res.status('404').send({message:'id isnt exits'});
//         }
//         else{
//             res.send(data.cttour);
//         }
//     }).catch(err=>{res.status('500').send({message:'There are some error'})})
    
// }

// exports.update_detail = async(req, res) => {
//    const id=req.params.id;
//    cttdb.findByIdAndUpdate(id,req.body).then(data=>{
//     if(!data){
//         res.status('404').send({message:'id isnt exits'});
//     }
//     else{
//         res.send(data.cttour);
//     }
//         }).catch(err=>{res.status('500').send({message:'There are some error'})})
// }
