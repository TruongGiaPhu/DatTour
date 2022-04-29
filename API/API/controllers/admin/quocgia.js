const quocgia = require('../../models/quocgia');
const kh = require('../../models/khachhang')
exports.create = async (req, res) => {
    if (!req.body) {
        res.status('400').send('Cannot empty');
    }
    const name = req.body.name
    var q = new quocgia({
        name: req.body.name
    })
    const checkName = await quocgia.findOne({ name: name })
    if (checkName) {
        res.send('quoc gia is exits')
    } else {
        q.save(q).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send("Some error occurred while creating a create operation");
        })
    }
}

exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;
        quocgia.findById(id).then(data => {
            if (!data) {
                res.status('404').send({ message: 'Not found quocgia with id ' + id });
            }
            else {
                res.send(data);
            }
        }).catch(err => {
            res.status(500).send({ message: 'Error retrieving quocgia with id' });
        })
    } else {
        quocgia.find().then(data => {
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
    quocgia.findByIdAndUpdate(id, req.body).then(data => {
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
    quocgia.findByIdAndDelete(id, req.body).then(data => {
        if (!data) {
            res.status(404).send({
                message: err.message
            })
        }
        else { res.send({ message: "Successfully" }); }
    })
}

