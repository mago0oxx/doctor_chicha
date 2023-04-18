const { check } = require('express-validator');
const { validateResult } = require('../Helpers/ValidateHelper.js');


const validateCreate = [
    check('name')
        .exists()
        .not()
        .withMessage("You must enter a type")
        .isString(),
    check('description')
        .exists()
        .withMessage("You must enter a brand")
        .isLength({min: 1}, {max: 15})
        .not()
        .isString(),
    check('image')
        .isString(),
    check('status')
        .exists()
        .not()
        .withMessage("You must enter a status")
        .isString(),
    check('active')
        .exists()
        .withMessage("You must enter a active")
        .not()
        .isString(),
    check('price')
        .isLength({min: 1})
        .withMessage("You must enter a price")
        .isNumeric(),
    check('description')
        .exists()
        .withMessage("You must enter a description")
        .not()
        .isLength({min: 30}, {max:550})
        .isString(),
   
   
    check('quantity')
        .exists()
        .withMessage("You must enter a color")
        .not()
        .isLength({min: 3}, {max: 18})
        .isString(),
    
    check('trademark')
        .exists()
        .withMessage("You must enter a model")
        .not()
        .isLength({min: 2}, {max:20})
        .isString(),
    check('category')
        .exists()
        .withMessage("You must enter a category")
        .not()
        .isLength({min: 3}, {max:15})
        .isString(),
    
   
    
    check('provider')
        .exists()
        .not()
        .isLength({min: 1}, {max:20})
        .isString()
        .withMessage("You must enter a provider"),
    (req, res, next) => {
        validateResult(req, res, next)
        }
]


module.exports = { validateCreate }