var nhanviendb = require('../../models/nhanvien')
var Chucvu = require('../../models/chucvu')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        nhanviendb.findById(id).populate('chucvu_id').then(data => {
            if (!data) {
                res.status('404').send({ message: 'Not found nhan vien with id ' + id });
            }
            else {
                res.send(data);
            }
        }).catch(err => {
            res.status(500).send({ message: 'Error retrieving nhan vien with id' });
        })
    }
    else {
        nhanviendb.find().populate('chucvu_id').then(data => {
            return res.send(data);
        }).catch(err => {
            res.status(500).send({ message: 'Error retrieving tour information' });
        })
    }
}

exports.login = async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = await nhanviendb.findOne({ username: username }).populate('chucvu_id')

    if (user === null) {
        res.send("Failed")
    } else {
        var validate = await bcrypt.compare(password, user.password);
        if (validate) {
            const actoken = jwt.sign({
                id: user._id,
                chucvu_id: user.chucvu_id
            },
                'secretkey',
                { expiresIn: '1h' })
            const { password, ...others } = user._doc;
            res.status('200').json({ ...others, actoken })
        }
        else
            res.send("wrong password")
    }
}

exports.logout = (req, res) => {
    req.logOut();
    return redirect('/login')
}

exports.create = async (req, res) => {
    if (!req.body) {
        res.status('400').send({ message: 'Cannot empty' });
    }
    const username = req.body.username
    const email = req.body.email
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, salt);
    var nv = await new nhanviendb({
        name: req.body.name,
        gender: req.body.gender,
        phone: req.body.phone,
        email: req.body.email,
        identity: req.body.identity,
        address: req.body.address,
        // chucvu_id: '',
        username: req.body.username,
        password: hashed,
        date: req.body.date,
        img: req.body.img,
    })
    const checkUser = await nhanviendb.findOne({ username: username })
    const checkMail = await nhanviendb.findOne({ email: email })
    if (checkUser || checkMail) {
        res.json('Tài khoản hoặc email đã tồn tại')
    } else {
        nv.save(nv).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        })
    }
}



exports.update = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Connect can be empty" });
    }
    const id = req.params.id;
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    nhanviendb.findByIdAndUpdate(id, req.body,).populate('chucvu_id').then(data => {
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
    nhanviendb.findByIdAndDelete(id, req.body).populate('chucvu_id').then(data => {
        if (!data) {
            res.status(404).send({
                message: err.message
            })
        }
        else { res.send("Successfully"); }
    })
}


exports.changepassword = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Connect can be empty" });
    }
    const id = req.params.id;
    const salt = await bcrypt.genSalt(10);
    const oldpassword = req.body.oldpassword
    var user = await nhanviendb.findOne({ _id: id })
    var validate = await bcrypt.compare(oldpassword, user.password);

    req.body.password = await bcrypt.hash(req.body.password, salt);
    if (validate) {
        nhanviendb.findByIdAndUpdate(id, req.body).populate('chucvu_id').then(data => {
            if (!data) {
                res.status(404).send({
                    message: 'failed'
                })
            }
            { res.send(data); }
        }).catch(err => {
            res.status(500).send({
                message: "Some error occurred"
            })
        })
    }
    else { res.send({ message: "wrong old password" }) }
}


