const express = require("express")
const router = express.Router()
const {routerGetProducts , routerPostProducts, routerDeleteProduct}= require("../Controller/ProductoController")

router.get("/", (req, res) => {
    routerGetProducts(req, res);
});

router.post('/', (req, res) => {
    routerPostProducts(req, res);
});

router.delete('/:id', (req, res) => {
    routerDeleteProduct(req, res)
})


module.exports = router