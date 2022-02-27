const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

//Register
exports.Register = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        const findUser = await User.find({ $or: [{ email }, { username }] });
        if (findUser.length !== 0) {
            return res.status(400).send({ message: "email or username is already in use", findUser })
        }
        const newUser = new User({ ...req.body });
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        newUser.password = hashedPassword;
        await newUser.save();
        const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
            expiresIn: 10,
        });
        res.status(200).send({ message: "User is created", newUser, token })
    } catch (err) {
        res.status(500).send(err)
    }

};

// login
exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const findUser = await User.findOne({ email });
        if (!findUser) {
            return res.status(400).send({ message: "bad credentials" })
        }
        const comparePass = await bcrypt.compare(password, findUser.password);
        if (!comparePass) {
            return res.status(400).send({ message: "bad credentials" })
        }
        const token = jwt.sign({ id: findUser._id }, process.env.SECRET_KEY, {
            expiresIn: "3h",
        });
        res.status(200).send({ message: "login succ", findUser, token })
    } catch (err) {
        res.status(500).send(err)
    }
};
