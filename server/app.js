const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises;
require('dotenv').config();
const mongoose = require('./db'); //connects to DB
const { Recipe } = require('./models/recipe');
const { User } = require('./models/user');

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({extended: true}));

app.use(cors({
  origin: 'http://localhost:3001', // Replace with your React app's port
  credentials: true
}));

app.listen(PORT, () => {
    console.log(`Recipe app running at http://localhost:${PORT}`);
});

app.get('/recipes', (req, res) =>{
    res.status(200).send(`<h1>This worked!</p>`);
});

app.post('/create', async (req, res, next) => {
  try {
    const recipe = await Recipe.create(req.body);
    console.log('Recipe saved:', recipe);
    res.status(201).send('<h1>Recipe created!</h1>');
  } catch (err) {
    console.error('Error saving to MongoDB:', err);
    res.status(500).send('<h1>Failed to save recipe</h1>');
  }
});


app.delete('/delete', (req, res) =>{
    res.status(200).send(`<h1>This worked!</p>`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`<h1>Server Error</h1><p>${err.message}</p>`);
});