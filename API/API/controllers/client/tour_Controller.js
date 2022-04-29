const Tour = require('../../models/tour')
const Quocgia = require('../../models/quocgia')
const Phuongtien = require('../../models/phuongtien')

module.exports.get_tour = async (req, res) => {

    const tour = await Tour.find()
    .populate('quocgia_id')
    .populate('phuongtien_id')
    
    if(tour)
        return res.json(tour)
    else
        return res.send({msg:'Not Found'})
}

module.exports.get_tour_id = async(req, res) =>{
    
    const id = req.params.id
    const tour = await Tour.findOne({_id:id})
    .populate('quocgia_id')
    .populate('phuongtien_id')
    
    if(tour)
        return res.json(tour)
    else
        return res.send({msg:'Not Found'})
}


module.exports.get_tour_country_id = async(req, res) =>{
    
    const quocgia_id = req.params.quocgia_id
    
    const tour = await Tour.find({quocgia_id:quocgia_id})
    .populate('quocgia_id')
    .populate('phuongtien_id')

    if(tour)
        return res.json(tour)
    else
        return res.send({msg:'Not Found'})
}

module.exports.get_tour_price = async(req, res) =>{
    
    const price = req.params.price
    
    const tour = await Tour.find({price:price})
    .populate('quocgia_id')
    .populate('phuongtien_id')
    if(tour)
        return res.json(tour)
    else
        return res.send({msg:'Not Found'})
}

module.exports.search_tour_country_name = async(req, res) =>{
    
    const name = req.query.name
    const quocgia = await Quocgia.findOne({name:name})
    const quocgia_id=quocgia._id
    
    const tour = await Tour.find({quocgia_id:quocgia_id})
    .populate('quocgia_id')
    .populate('phuongtien_id')
    if(tour)
        return res.json(tour)
    else
        return res.send({msg:'Not Found'})
}

module.exports.search_tour_price = async(req, res) =>{
    
    const price = req.query.price
    
    const tour = await Tour.find({price:price})
    .populate('quocgia_id')
    .populate('phuongtien_id')
    if(tour)
        return res.json(tour)
    else
        return res.send({msg:'Not Found'})
}

module.exports.search_tour_name = async(req, res) =>{
    
    const name = req.query.name
    
    const tour = await Tour.find({name:name})
    .populate('quocgia_id')
    .populate('phuongtien_id')
    if(tour)
        return res.json(tour)
    else
        return res.send({msg:'Not Found'})
}