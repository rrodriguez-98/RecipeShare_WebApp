const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises;
require('dotenv').config();
const mongoose = require('./db'); //connects to DB
const { Recipe } = require('./models/recipe');
const { User } = require('./models/user');


console.log('🚀 Server starting...');


const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// CORS middleware
app.use(cors({
  origin: 'http://localhost:5173', // Match your frontend port
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
}));


// Manual CORS headers
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
//   // Handle preflight requests
//   if (req.method === 'OPTIONS') {
//     res.sendStatus(200);
//   } else {
//     next();
//   }
// });

//Root Route
app.get('/', (req,res) =>{
    res.send('API is running...');
});

//List Recipes
app.get('/recipe', async (req, res) =>{
    try {
      const recipes = await Recipe.find(); // Get all recipes
      res.json(recipes); // Send as JSON
    } catch (err) {
      console.error('Error retrieving from MongoDB:', err);
      res.status(500).send('<h1>Failed to get recipe</h1>');
    }
});

app.get('/recipes/:id', async (req, res) =>{
  //
});

app.post('/create', async (req, res, next) => {
  console.log('Full request body:', req.body);

  if (!req.body) {
    return res.status(400).json({ error: 'Request body is required' });
  }

  const { name, recipeName, ingredients, recipeSteps, forumSection } = req.body;
  console.log('Forum section received:', forumSection);
  const newRecipe = {
    name,
    recipeName, 
    ingredients,
    recipeSteps,
    forumSection, // This tells you which forum it belongs to
    createdAt: new Date()
  };
  console.log('New recipe object:', newRecipe);
  try {
    const recipe = await Recipe.create(newRecipe);
    console.log('Recipe saved:', recipe);
    res.status(201).send('<h1>Recipe created!</h1>');
  } catch (err) {
    console.error('Error saving to MongoDB:', err);
    res.status(500).send('<h1>Failed to save recipe</h1>');
  }
});


app.delete('/delete', (req, res) =>{
    //res.status(200).send(`<h1>This worked!</h1>`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`<h1>Server Error</h1><p>${err.message}</p>`);
});

app.listen(PORT, () => {
    console.log(`Recipe app running at http://localhost:${PORT}`);
});