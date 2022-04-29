const Ve = require('../../models/ve')

module.exports.bookTour = async(req, res) => {
    const tour_id = req.body.tour_id
    const ve = await Ve.findOne({tour_id:tour_id})
    const id = ve._id

    sum = parseInt(req.body.SLNL);
    if(sum <=0 ) {
        return res.json('Số lượng người lớn phải lớn hơn 0')
    }
    if (req.body.SLNL === '') {
        return res.json('Số lượng người lớn không được rỗng')
    }

    sumTon=0;
    sumkid = parseInt(req.body.SLTE);
    if(sumkid <0 ) {
        return res.json('Số lượng trẻ em không được âm')
    }
    if (req.body.SLTE === '') {
        return res.json('Số lượng trẻ em không được rỗng')
    }
    sumkidTon=0;
    ve.ctve.map(item=>{
        sum += parseInt(item.SLNL)
        sumTon += parseInt(item.SLNL)
        sumkid += parseInt(item.SLTE)
        sumkidTon += parseInt(item.SLTE)
    })

    const sltonNL = parseInt(ve.quantity) - sumTon
    const sltonTE = parseInt(ve.quantity_kid) - sumkidTon
    const resultNL = `Rất tiếc! Người lớn chỉ còn:   ${sltonNL} chỗ`
    const resultTE = `Rất tiếc! Trẻ em chỉ còn:   ${sltonTE} chỗ`

    if(sum > parseInt(ve.quantity)){
        return res.json({name:'False', msg: resultNL})
    }
    if(sumkid > parseInt(ve.quantity_kid)){
        return res.json({name:'False Kid', msg: resultTE})
    }

    const newCTVe = {
        SLNL : req.body.SLNL,
        SLTE : req.body.SLTE,
        khachhang_id: req.body.khachhang_id
    }

    await Ve.findByIdAndUpdate(id,{
        $push:{
            ctve:newCTVe
        }
    })

    return res.json('Booking success')

}

module.exports.getDetailVe = async(req, res) => {
    const khachhang_id = req.body.khachhang_id
    const ve = await Ve.find()
    .populate({path:'tour_id'})

    const newHistory = []
    ve.forEach(function(value1) {
        value1.ctve.forEach(function(value2) {
            if(value2.khachhang_id == khachhang_id){
                var history = [
                    value2.SLNL,
                    value2.SLTE,
                    value2.dateCreate,
                    value2._id,
                    value1.tour_id.name,
                    value1.tour_id.itinerary,
                    value1.tour_id.price,
                    value1.tour_id.price_kid,
                    value1.tour_id.img,
                    value1._id,
                    value2.khachhang_id,
                    value1.tour_id._id
                ]
                newHistory.push(history)
            }
        })
    });

    return res.json(newHistory)
}

module.exports.deleteTour = async(req, res) => {
    const tour_id = req.body.tour_id
    const ct_id = req.body.ct_id
    const ve = await Ve.findOne({tour_id:tour_id})
    if(ve===null)
        return res.json('NULL')
    const id = ve._id
    await Ve.findByIdAndUpdate(id,{
        $pull:{
            ctve:{
                _id: ct_id
            }
        }
    })
    return res.json('Delete success')
}
