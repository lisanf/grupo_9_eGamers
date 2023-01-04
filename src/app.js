const express = require('express');
const path = require('path');

let app = express();

const mainRouter = require("./routes/mainRouter.js")

app.use(express.static("public"));

app.set('view engine','ejs');

app.use(mainRouter);

// Ponemos a escuchar el servidor
const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:" + port)
});



