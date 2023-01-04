const express = require('express');
const path = require('path');

let app = express();

const mainRoutes = require("./routes/mainRoutes.js")
const usersRoutes = require("./routes/usersRoutes.js")
const productsRoutes = require("./routes/productsRoutes.js")

app.use(express.static("public"));

app.set('view engine','ejs');

app.use(mainRoutes);
app.use(usersRoutes);
app.use(productsRoutes);

// Ponemos a escuchar el servidor
const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:" + port)
});



