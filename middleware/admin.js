const {jwt,jwtSecret} = require('../config');

function adminMiddleware(req,res,next){
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({message: 'Unauthorized'});
    }
    const words = token.split(' ');
    if(words[0] !== 'Bearer'){
        return res.status(400).json({message: 'Authorization token format is invalid'});
    }
    const jwtToken = words[1];
    try{
        const decoded = jwt.verify(jwtToken,jwtSecret);
        if(decoded.username){
            next();
        }else{
            res.status(401).json({message: 'Unauthorized'});
        }
    }catch(error){
        res.status(401).json({message: 'Unauthorized'});
    }

}

module.exports = adminMiddleware;
