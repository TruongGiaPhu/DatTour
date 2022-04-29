const kh = require('../../models/khachhang');
const tour = require('../../models/tour');
const ve = require('../../models/ve');
const qg = require('../../models/quocgia');

exports.tongkh = (req, res) => {

    kh.find().then(data => {
        var KH = 0;
        KH = Object.keys(data).length
        res.json({ KH });
    }).catch(err => {
        res.status(500).send({ message: 'Error information' });
    }
    )
}

exports.tongtour = (req, res) => {
    tour.find().then(data => {

        res.json(Object.keys(data).length);
    }).catch(err => {
        res.status(500).send({ message: 'Error information' });
    }
    )
}

exports.tongtourtheoquocgia = (req, res) => {
    const id = req.query.id;
    tour.find({ quocgia_id: id }).populate('quocgia_id').then(data => {

        res.json(Object.keys(data).length);
    }).catch(err => {
        res.status(500).send({ message: 'Error information' });
    }
    )
}

exports.tongtourdat = (req, res) => {

    ve.find().then(data => {
        var count = 0;
        for (var i = 0; i < Object.keys(data).length; i++) {

            if (data[i].ctve.length > 0) {
                count++;
            }
        }
        return res.json({ count });
    }).catch(err => {
        res.status(500).send({ message: 'Error information' });
    }
    )
}

exports.tongdoanhthu = (req, res) => {

    ve.find().then(data => {
        var sum = 0;
        for (var i = 0; i < Object.keys(data).length; i++) {
            for (var j = 0; j < data[i].ctve.length; j++) {
                sum += data[i].ctve[j].SLNL * data[i].price + data[i].ctve[j].SLTE * data[i].price_kid;
            }
        }
        res.json({ sum });
    }).catch(err => {
        res.status(500).send({ message: 'Error information' });
    }
    )
}

exports.tongdoanhthutheonam = (req, res) => {

    ve.find().then(data => {
        var sum = 0;
        var nam;
        for (var i = 0; i < Object.keys(data).length; i++) {
            for (var j = 0; j < data[i].ctve.length; j++) {
                if (data[i].ctve[j].dateCreate.getFullYear() == req.query.year) {
                    sum += data[i].ctve[j].SLNL * data[i].price + data[i].ctve[j].SLTE * data[i].price_kid;
                    if (nam == null) {
                        nam = data[i].ctve[j].dateCreate.getFullYear();
                    }
                }
            }
        }
        res.json({ sum, nam });
    }).catch(err => {
        res.status(500).send({ message: 'Error information' });
    }
    )
}

exports.tongdoanhthutheothang = (req, res) => {

    ve.find().then(data => {
        var sum = 0;
        var thang;
        for (var i = 0; i < Object.keys(data).length; i++) {
            for (var j = 0; j < data[i].ctve.length; j++) {
                if (data[i].ctve[j].dateCreate.getMonth() == req.query.month - 1 && data[i].ctve[j].dateCreate.getFullYear() == req.query.year) {
                    sum += data[i].ctve[j].SLNL * data[i].price + data[i].ctve[j].SLTE * data[i].price_kid;
                    if (thang == null) {
                        thang = data[i].ctve[j].dateCreate.getMonth() + 1;
                    }
                }
            }
        }
        res.json({ sum, thang });
    }).catch(err => {
        res.status(500).send({ message: 'Error information' });
    }
    )
}

exports.tongdoanhthutheoquocgia = (req, res) => {

    ve.find().populate('tour_id').populate({ path: 'tour_id', populate: { path: 'quocgia_id', model: qg } }).then(data => {
        var sum = 0;
        for (var i = 0; i < Object.keys(data).length; i++) {
            for (var j = 0; j < data[i].ctve.length; j++) {
                if (data[i].tour_id.quocgia_id._id == req.query.id) {
                    sum += data[i].ctve[j].SLNL * data[i].price + data[i].ctve[j].SLTE * data[i].price_kid;
                }
            }
        }
        res.json({ sum });
    }).catch(err => {
        res.status(500).send({ message: 'Error information' });
    }
    )
}

exports.tongdoanhthutheothangnam = (req, res) => {

    ve.find().then(data => {
        var sum = 0, sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0, sum8 = 0, sum9 = 0, sum10 = 0, sum11 = 0;
        var thang, thang1, thang2, thang3, thang4, thang5, thang6, thang7, thang8, thang9, thang10, thang11;
        for (var i = 0; i < Object.keys(data).length; i++) {
            for (var j = 0; j < data[i].ctve.length; j++) {
                if (data[i].ctve[j].dateCreate.getMonth() == 0 && data[i].ctve[j].dateCreate.getFullYear() == req.query.year) {
                    sum += data[i].ctve[j].SLNL * data[i].price + data[i].ctve[j].SLTE * data[i].price_kid;
                    if (thang == null) {
                        thang = data[i].ctve[j].dateCreate.getMonth() + 1;
                    }
                }
                if (data[i].ctve[j].dateCreate.getMonth() == 1 && data[i].ctve[j].dateCreate.getFullYear() == req.query.year) {
                    sum1 += data[i].ctve[j].SLNL * data[i].price + data[i].ctve[j].SLTE * data[i].price_kid;
                    if (thang1 == null) {
                        thang1 = data[i].ctve[j].dateCreate.getMonth() + 1;
                    }
                }
                if (data[i].ctve[j].dateCreate.getMonth() == 2 && data[i].ctve[j].dateCreate.getFullYear() == req.query.year) {
                    sum2 += data[i].ctve[j].SLNL * data[i].price + data[i].ctve[j].SLTE * data[i].price_kid;
                    if (thang2 == null) {
                        thang2 = data[i].ctve[j].dateCreate.getMonth() + 1;
                    }
                }
                if (data[i].ctve[j].dateCreate.getMonth() == 3 && data[i].ctve[j].dateCreate.getFullYear() == req.query.year) {
                    sum3 += data[i].ctve[j].SLNL * data[i].price + data[i].ctve[j].SLTE * data[i].price_kid;
                    if (thang3 == null) {
                        thang3 = data[i].ctve[j].dateCreate.getMonth() + 1;
                    }
                }
                if (data[i].ctve[j].dateCreate.getMonth() == 4 && data[i].ctve[j].dateCreate.getFullYear() == req.query.year) {
                    sum4 += data[i].ctve[j].SLNL * data[i].price + data[i].ctve[j].SLTE * data[i].price_kid;
                    if (thang4 == null) {
                        thang4 = data[i].ctve[j].dateCreate.getMonth() + 1;
                    }
                }
                if (data[i].ctve[j].dateCreate.getMonth() == 5 && data[i].ctve[j].dateCreate.getFullYear() == req.query.year) {
                    sum5 += data[i].ctve[j].SLNL * data[i].price + data[i].ctve[j].SLTE * data[i].price_kid;
                    if (thang5 == null) {
                        thang5 = data[i].ctve[j].dateCreate.getMonth() + 1;
                    }
                }
                if (data[i].ctve[j].dateCreate.getMonth() == 6 && data[i].ctve[j].dateCreate.getFullYear() == req.query.year) {
                    sum6 += data[i].ctve[j].SLNL * data[i].price + data[i].ctve[j].SLTE * data[i].price_kid;
                    if (thang6 == null) {
                        thang6 = data[i].ctve[j].dateCreate.getMonth() + 1;
                    }
                }
                if (data[i].ctve[j].dateCreate.getMonth() == 7 && data[i].ctve[j].dateCreate.getFullYear() == req.query.year) {
                    sum7 += data[i].ctve[j].SLNL * data[i].price + data[i].ctve[j].SLTE * data[i].price_kid;
                    if (thang7 == null) {
                        thang7 = data[i].ctve[j].dateCreate.getMonth() + 1;
                    }
                } if (data[i].ctve[j].dateCreate.getMonth() == 8 && data[i].ctve[j].dateCreate.getFullYear() == req.query.year) {
                    sum8 += data[i].ctve[j].SLNL * data[i].price + data[i].ctve[j].SLTE * data[i].price_kid;
                    if (thang8 == null) {
                        thang8 = data[i].ctve[j].dateCreate.getMonth() + 1;
                    }
                } if (data[i].ctve[j].dateCreate.getMonth() == 9 && data[i].ctve[j].dateCreate.getFullYear() == req.query.year) {
                    sum9 += data[i].ctve[j].SLNL * data[i].price + data[i].ctve[j].SLTE * data[i].price_kid;
                    if (thang9 == null) {
                        thang9 = data[i].ctve[j].dateCreate.getMonth() + 1;
                    }
                } if (data[i].ctve[j].dateCreate.getMonth() == 10 && data[i].ctve[j].dateCreate.getFullYear() == req.query.year) {
                    sum10 += data[i].ctve[j].SLNL * data[i].price + data[i].ctve[j].SLTE * data[i].price_kid;
                    if (thang10 == null) {
                        thang10 = data[i].ctve[j].dateCreate.getMonth() + 1;
                    }
                } if (data[i].ctve[j].dateCreate.getMonth() == 11 && data[i].ctve[j].dateCreate.getFullYear() == req.query.year) {
                    sum11 += data[i].ctve[j].SLNL * data[i].price + data[i].ctve[j].SLTE * data[i].price_kid;
                    if (thang11 == null) {
                        thang11 = data[i].ctve[j].dateCreate.getMonth() + 1;
                    }
                }
            }
        }
        res.json({ sum, sum1, sum2, sum3, sum4, sum5, sum6, sum7, sum8, sum9, sum10, sum11 });
    }).catch(err => {
        res.status(500).send({ message: 'Error information' });
    }
    )
}
