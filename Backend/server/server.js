require('./config/config');

const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

//App api
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Rutas servicios
app.use(require('./routes/user'));

//Config DB
mongoose.connect('mongodb://localhost:27017/test-onegorilla', { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log("Database online");
});

//Config app puerto
app.listen(process.env.PORT, () => {
    console.log("El servidor está inicializado en el puerto " + process.env.PORT);
});