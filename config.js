module.exports = {
    'jwtSecret': process.env.JWTSECRET
    , 'jwtSession': {
        session: false
    }
    , 'database': process.env.MONGODB_URI
};