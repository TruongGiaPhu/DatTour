const Khachhang = require('../../models/khachhang')
module.exports.get_khachhang = async (req, res) => {

    const khachhang = await Khachhang.find({})
    res.json(khachhang)
}
module.exports.get_khachhang_id = async(req, res) =>{
    
    const id = req.params.id
    
    const khachhang = await Khachhang.findOne({_id:id})

    res.json(khachhang)
}

module.exports.get_quoctich_id = async(req, res) =>{
    
    const quoctich_id = req.params.quoctich_id
    
    const khachhang = await Khachhang.find({quoctich_id:quoctich_id})

    res.json(khachhang)
}