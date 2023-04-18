const express = require("express");
const router = express.Router()
const categoryRouter = require ("./categoryRoutes")
// const { Pokemon , Types } = require('../../db')
 const productRoute = require("./productRoutes") 
const authRouter = require('./AuthRouters')

router.use('/products', productRoute);
// router.use('/types', types)
router.use('/category', categoryRouter);
router.use('/auth', authRouter)


module.exports = router;
