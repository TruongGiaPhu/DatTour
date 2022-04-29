const ve = require('../../models/ve');
const kh = require('../../models/khachhang');
const Tour = require('../../models/tour');

exports.getve = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        ve.findById(id).populate('loaive_id').populate('tour_id').then(data => {
            if (!data) {
                res.status('404').send({ message: 'Not found ve with id ' + id });
            }
            else {
                res.send(data);
            }
        }).catch(err => {
            res.status(500).send({ message: 'Error retrieving ve with id' });
        })
    } else {
        ve.find().populate('loaive_id').populate({ path: 'ctve', populate: { path: "khachhang_id", model: kh } }).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({ message: 'Error retrieving tour information' });
        })
    }
}

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Connect can be empty" });
    }
    const id = req.params.id;
    ve.findByIdAndUpdate(id, req.body).then(data => {
        if (!data) {
            res.status(404).send({
                message: err.message
            })
        }
        else { res.send(data); }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred"
        })
    })
}

exports.delete = (req, res) => {
    const id = req.params.id
    ve.findByIdAndDelete(id, req.body).then(data => {
        if (!data) {
            res.status(404).send({
                message: err.message
            })
        }
        else { res.send({ message: "Successfully" }); }
    })
}

exports.ctv = (req, res) => {
    const id = req.query.id;
    ve.findById(id).then(data => {
        if (!data) {
            res.status('404').send({ message: 'Not found ve with id ' + id });
        }
        else {
            res.send(data.ctve);
        }
    }).catch(err => {
        res.status(500).send({ message: 'Error retrieving nhan vien with id' } || err);
    })
}

exports.create = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Connect can be empty" });
    }
    const tour_id = req.body.tour_id;
    const tour = await Tour.findById(tour_id);
    const price = tour.price;
    const price_kid = tour.price_kid;
    const ss = await ve.findOne({ tour_id: tour_id }).populate('tour_id')

    if (!ss) {
        var v = new ve({
            price: price,
            price_kid: price_kid,
            quantity: req.body.quantity,
            quantity_kid: req.body.quantity_kid,
            loaive_id: '624c564212f46cfd65afad73',
            tour_id: tour_id,
            ctve: [],
        })
        v.save(v).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        })
    } else {
        res.send("Tour is exist");
    }


}