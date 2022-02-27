const { Register, Login } = require("../controllers/userControllers");
const express = require("express");
const isAuth = require("../middleware/isAuth");
const {
    registerValidator,
    loginValidator,
    validation,
} = require("../middleware/user.validator");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({ message: "test routing" });
});

router.post("/add", registerValidator(), validation, Register);


router.post("/login", loginValidator(), validation, Login);


router.get("/current", isAuth, (req, res) => {
    res.send({ message: "authorized", user: req.user });
});
module.exports = router;
