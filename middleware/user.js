const {jwt,jwtSecret} = require('../config');

function userMiddleware(req,res,next){
    const token = req.headers.authorization;
    const words = token.split(' ');
    const jwtToken = words[1];
    const decoded = jwt.verify(jwtToken,jwtSecret);
    if(decoded.username){
        next();
    }else{
        res.status(401).json({message: 'Unauthorized'});
    }
}

module.exports = userMiddleware;
