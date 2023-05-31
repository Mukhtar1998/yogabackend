const jwt = require('jsonwebtoken');
const config = process.env;

const verifyToken = (req, res, next)=>{
    if (req._parsedUrl.path === '/api/users/login' ||
    req._parsedUrl.path === '/api/users/register' ||
    req._parsedUrl.path === '/api/courses') {
        next();
    } else {
        const token = req.body.token || req.query.token || req.get("Authorization")?.split(' ')[1];
        if(!token) return res.status(403).send({message: "Invalid token for authentification"})
        try {
            const decoded = jwt.verify(token, config.JWT_SECRET)
            req.user = decoded;
            return next();
        } catch (error) {
            res.status(401).send({
                success: false,
                message: error.message
            });
        }
    }
}

module.exports =verifyToken;