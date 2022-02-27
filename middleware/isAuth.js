const User = require('../model/User');
const jwt = require('jsonwebtoken');

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers["authorization"];
        if (!token) {
            return res
                .status(401)
                .send({ message: "you are not authorized 1" });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findOne({ _id: decoded.id });
        if (!user) {
            return res
                .status(401)
                .send({ message: "you are not authorized 2" })
        }
        req.user = user;
        next()
    } catch (err) {
        res.status(401).send({ message: "you are not authorized 3" })
    }
};

module.exports = isAuth;