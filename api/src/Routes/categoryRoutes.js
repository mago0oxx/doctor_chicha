const express = require("express")
const router = express.Router()
const { routergetProductCategory} = require('../Controller/ProductoController')

router.get("/" , (req , res)=> {
    routergetProductCategory(req , res)
})


module.exports = router