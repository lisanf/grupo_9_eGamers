
const express = require("express");
const path = require("path")

const router =express.Router()

const mainController= require("../controllers/mainController")

router.get("/", mainController.home);
router.get("/menu", mainController.menu);
router.get("/login", mainController.login);
router.get("/register", mainController.register)
router.get("/productCart",mainController.productCart);
router.get("/productDetail",mainController.productDetail)
router.get("/store", mainController.store)


module.exports = router