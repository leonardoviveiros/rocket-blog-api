var jwt = require('jwt-simple');
var config = require('../../config');


module.exports = function () {
    this.decode = function (token, req, res) {
        try {
            if (token) {
                jwt.verify(token, config.jwtSecret, function (err, decoded) {
                    if (err) {
                        return res.json({success: false, message: 'Failed to authenticate token'});
                    } else {
                        req.decoded = decoded;
                        next();
                    }
                });
            } else {
                return res.status(403).send({success: false, message: 'No token provided.'});
            }
        } catch (err) {
            return 401;
        }
    };
};