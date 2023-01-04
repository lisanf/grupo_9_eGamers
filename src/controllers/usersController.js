const express = require("express");
const path = require("path")


const usersController = {
    login: function(req, res){
        let login = path.join(__dirname, "../views/users/login.ejs")
        res.render(login)
    },
    register: function(req, res){
        let register = path.join(__dirname, "../views/users/register.ejs")
        res.render(register)
    },
}
module.exports = usersController;