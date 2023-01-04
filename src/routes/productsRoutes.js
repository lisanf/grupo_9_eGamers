const express = require("express");
const path = require("path")

const router =express.Router()

const productsController = require("../controllers/productsController")

router.get("/productDetail", productsController.productDetail)
router.get("/store", productsController.store) 
router.get('/productCart',productsController.productCart)

module.exports = router