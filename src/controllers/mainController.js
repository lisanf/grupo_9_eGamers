const fs = require('fs')

const express = require("express");
const path = require("path")


const mainController = {
    home: function(req, res){
        let home = path.resolve(__dirname, "../views/home.html")
        res.sendFile(home)
    },
    menu: function(req, res){
        let menu = path.resolve(__dirname, "../views/menu.html")
        res.sendFile(menu)
    },
    productCart: function(req, res){
        let productCart = path.resolve(__dirname, "../views/products/productCart.html")
        res.sendFile(productCart)
    },
    productDetail: function(req, res){
        let productDetail = path.resolve(__dirname, "../views/products/productDetail.html")
        res.sendFile(productDetail)
    },
    store: function(req, res){
        let store = path.resolve(__dirname, "../views/products/store.html")
        res.sendFile(store)
    },
    login: function(req, res){
        let login = path.resolve(__dirname, "../views/users/login.html")
        res.sendFile(login)
    },
    register: function(req, res){
        let register = path.resolve(__dirname, "../views/users/register.html")
        res.sendFile(register)
    },
    
}
module.exports = mainController