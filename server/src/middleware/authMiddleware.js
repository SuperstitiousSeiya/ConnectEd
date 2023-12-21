const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
          if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ status: 401, error: 'Token expired' });
          } else {
            return res.status(403).json({ error: 'Invalid token' });
          }
        }
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
