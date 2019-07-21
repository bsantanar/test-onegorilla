const express = require("express");
const User = require('../models/user');
const cors = require('cors');

const app = express();
app.use(cors());

//Servicio get para obtener todos los valores
app.get('/values', (req, res) => {
    User.find((err, values) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.status(200).json({
            ok: true,
            values
        });
        return;
    })
});

//Servicio post para crear un valor
app.post('/values', (req, res) => {
    let body = req.body;

    let value = new User({
        email: body.email,
        name: body.name,
        nValue: body.n,
        mValue: body.m,
        result: body.result
    });

    value.save((err, valueDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                message: err.message
            });
        }
        res.status(200).json({
            ok: true,
            valueDB
        });
    });

});

module.exports = app;