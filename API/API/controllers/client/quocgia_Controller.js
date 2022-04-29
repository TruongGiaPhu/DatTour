const Quocgia = require('../../models/quocgia')

module.exports.get_country = async(req, res) =>{
    
    const quocgia = await Quocgia.find()
    if(quocgia)
        res.json(quocgia)
    else
        res.send('Not Found')
}