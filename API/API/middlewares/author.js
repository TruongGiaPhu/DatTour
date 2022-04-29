const e = require('express');
const jwt=require('jsonwebtoken');

const author={verifyToken:(req,res,next)=>{
    const token=req.headers.token;
    if(token){
        const accessToken=token.split(' ')[1];
        jwt.verify(accessToken, 'secretkey', (err, user)=>{
            if(err){
                return res.status(401).json({message: 'Token is invalid'});
            }
            req.user=user;
            next();
        });
    }
    else{
        return res.status(401).json({message: 'Auth failed'});
    }
}

    ,verifyTokenAdminorMe:(req,res,next)=>{
        author.verifyToken(req,res,()=>{
            if(req.user.chucvu_id==='admin'||req.user.id==req.params.id){
                next();
            }
            else{
                return res.status(401).json({message: 'You are not authorized'});
            }

    })
}
}
module.exports = author;
