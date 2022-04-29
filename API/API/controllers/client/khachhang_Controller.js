const Khachhang = require('../../models/khachhang')
const Quoctich = require('../../models/quoctich')
const Ve = require('../../models/ve')
const Tour = require('../../models/tour')


module.exports.login = async(req, res) => {
    const username = req.body.username
    const password = req.body.password
    const user = await Khachhang.findOne({username:username})
    
    if(user === null){
        return res.send("Failed")
    }else{
        if(user.password===password)
            return res.send(user)
        else
            return res.send("Login Failed")
    }
}

module.exports.register = async(req, res) => {
    var newKhachhang = new Khachhang({
        name : req.body.name,
        gender : '',
        phone : '',
        email : req.body.email,
        identity : '',
        address : '',
        username : req.body.username,
        password : req.body.password,
        quoctich_id: '624c56d912f46cfd65afad76'
    })
    const username = req.body.username
    const email = req.body.email
    
    const checkUser = await Khachhang.findOne({username: username})
    const checkMail = await Khachhang.findOne({email: email})
    if(checkUser){
        res.json('Tài khoản đã tồn tại')
    }else if(checkMail){
        res.json('Email đã tồn tại')
    }else{
        newKhachhang.save(newKhachhang).then(data=>{
            res.send(data);
        }).catch(err=>{
            res.status(500).send("Some error occurred while creating a create operation");
        })
    }
}

module.exports.get_khachhang = async (req, res) => {

    const khachhang = await Khachhang.find()
    .populate('quoctich_id')

    if(khachhang)
        return res.json(khachhang)
    else
        return res.send({msg:'Not Found'})
}
module.exports.get_khachhang_id = async(req, res) =>{
    
    const id = req.params.id
    
    const khachhang = await Khachhang.findOne({_id:id})
    .populate('quoctich_id')

    if(khachhang)
        return res.json(khachhang)
    else
        return res.send({msg:'Not Found'})
}

module.exports.history_khachhang_book = async(req, res) =>{
    const id = req.params.id
    
    const ve = await Ve.find({khachhang_id:id})
    .populate({path:'tour_id'})
    
    if(ve)
        return res.json(ve)
    else
        return res.send({msg:'Not Found'})
}