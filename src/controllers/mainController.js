const express = require("express");
const path = require("path")


const mainController = {
    home: function(req, res){
        let home = path.resolve(__dirname, "..views/users/home.html")
        res.sendFile(home)
    },
    menu: function(req, res){
        let menu = path.resolve(__dirname, "../views/users/menu.html")
        res.sendFile(menu)
    },
}
module.exports = mainController