const { json } = require('body-parser')
const { validate } = require('../models/Product')
const product = require('../models/Product')
const { validateCreate } = require('../validator/Products.js')
const categoria = require('../models/CategoyProduct')
const CategoyProduct = require('../models/CategoyProduct')



const routerGetProducts = async (req, res) => {
    const { item } = req.query
    const producto = await product.find()
    try {
        if (item) {
            let productItem = producto.filter((e) => e.item.toLowerCase().includes(item.toLowerCase()));

            productItem.length
                ? res.status(200).json(productItem)
                : res.status(201).json("product not found")
        } else {
            res.status(200).json(producto)
        }
    } catch (error) {
        res.send(`Error ${error}`);
    }
}
const routerPostProducts = async (req, res) => {
    validateCreate;
    const producto = product(req.body)

    producto
        .save()
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).json({ message: `${error}` }));

}

const routerDeleteProduct = async (req, res) => {
    const { active } = req.body
    const { id } = req.params

    product
        .updateOne({ _id: id }, { $set: { active } })
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).json({ message: `${error} ` }));
}

const routergetProductCategory = async (req, res) => {
    const { category } = req.query
    const categoria = await CategoyProduct.find()
    try {
        if (category) {
            let categoriadeproducto= categoria.filter((e) => e.category.toLowerCase().includes(category.toLowerCase()));

            categoriadeproducto.length
                ? res.status(200).json(categoriadeproducto)
                : res.status(201).json("product not found")
        } else {
            res.status(200).json(categoria)
        }
    } catch (error) {
        res.send(`Error ${error}`);
    }
}

const routerPostCategory = async (req, res) => {
    
    const categoria = CategoyProduct(req.body)

    categoria
        .save()
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).json({ message: `${error}` }));

}


module.exports =
{
    routerGetProducts,
    routerPostProducts,
    routerDeleteProduct,
    routergetProductCategory
}
