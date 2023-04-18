const { check } = require("express-validator");
const { validateResult } = require("../Helpers/ValidateHelper.js");

const validateCreate = [
check("name")
    .exists()
    .not()
    .withMessage("You must enter a name")
    .isLength({ min: 3 }, { max: 20 })
    .isString(),
check("lastname")
    .exists()
    .withMessage("You must enter a lastname")
    .isLength({ min: 3 }, { max: 20 })
    .not()
    .isString(),
check("dni")
    .exists()
    .not()
    .isLength({ min: 7 }, { max: 10 })
    .withMessage("You must enter a dni")
    .isNumeric(),

check("email")
    .exists()
    .withMessage("You must enter a email")
    .not()
    .isString(),
// check("password")
//     .exists()
//     .withMessage("You must enter a password")
//     .not()
//     .isString(),

check("telephone")
    .exists()
    .withMessage("You must enter a telephone")
    .not()
    .isString(),


check("Location")
    .exists()
    .withMessage("You must enter a location")
    .not()
    .isString(),

(req, res, next) => {
    validateResult(req, res, next);
},
];

module.exports = { validateCreate };