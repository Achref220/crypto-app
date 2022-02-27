const { check, validationResult } = require("express-validator");

exports.postValidator = () => [
    check("title", "title is required").isString().notEmpty(),
    check("paragraph", "paragraph is required").notEmpty(),
];

exports.postValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};