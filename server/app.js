const express = require('express');
const path = require('path');
const fs = require('fs').promises;
require('dotenv').config();
const mongoose = require('./db'); //connects to DB
// const Book = require('./models/book')

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log(`Recipe app running at http://localhost:${PORT}`);
});

app.get('/create', (req, res) =>{
    res.status(200).send(`<h1>This worked!</p>`);
});

app.post('/create', (req, res) =>{
    res.status(200).send(`<h1>This worked!</p>`);
});


app.delete('/create', (req, res) =>{
    res.status(200).send(`<h1>This worked!</p>`);
});