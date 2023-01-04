const express = require("express");
const path = require("path")


const productsController = {
    store: function(req, res){
        let store = path.join(__dirname, "../views/products/store.ejs")
        res.render(store)
    },
    productCart: function(req, res){
        let productCart = path.join(__dirname, "../views/products/productCart.ejs")
        res.render(productCart)
    },
    productDetail: function(req, res){
        let productDetail = path.join(__dirname, "../views/products/productDetail.ejs")
        res.render(productDetail)
    }
}
module.exports = productsController;