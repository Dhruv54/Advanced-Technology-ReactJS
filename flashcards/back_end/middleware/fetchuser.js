const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Dhruv#@v$s$himanshu'

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({ error: "Please Authenticate using a valid credential!" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        console.error(error.message);
        return res.status(401).json({ error: "Please Authenticate using a valid credential!" })
    }
}

module.exports = fetchuser;