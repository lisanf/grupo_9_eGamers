const express = require("express");
const path = require("path")


const mainController = {
    home: function(req, res){
        let home = path.join(__dirname, "../views/home.ejs")
        res.render(home)
    },
    menu: function(req, res){
        let menu = path.join(__dirname, "../views/menu.ejs")
        res.render(menu)
    },
}
module.exports = mainController