const express = require('express');
const path = require('path');

let app = express();

const mainRouter = require("./routers/mainRouter.js")

app.use(express.static("public"));

// Ponemos a escuchar el servidor
const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:" + port)
});

// Definimos las rutas a los distintos pedidos que nuestro sitio sabe responder
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/home", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/menu", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/menu.html"))
})

app.get("/store", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/store.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
})

app.get("/productDetail", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productDetail.html"));
})

app.get("/productCart", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"));
})


