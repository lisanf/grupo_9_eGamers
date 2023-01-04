const express = require("express");
const path = require("path")

const router =express.Router()

const mainController= require("../controllers/mainController")

router.get("/", mainController.home)
router.get("/menu", mainController.menu)

module.exports = router