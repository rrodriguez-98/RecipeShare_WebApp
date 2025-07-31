const mongoose = require('../db');
const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        minlength: [2, 'Title must be at least 2 characters long'],
        maxlength: [100, 'Title cannot exceed 100 characters']
    },
    recipeName: {
        type: String,
        required: [true, 'Author is required'],
        trim: true
    },
    ingredients: {
        type: String,
        default: 'Unknown',
        trim: true
    },
    recipeSteps: {
        type: String,
        default: 'Unknown',
        trim: true
    }
    ,
    duration: {
        type: Number,
        min: [5, 'Minimum allowed recipe duration is 5 minutes'],
    }
    ,
    forumSection: {
    type: String,
    required: [true, 'Forum section is required'],
    enum: ['main', 'five-ingredients', 'heirloom-recipes', 'cultural-wonders', 'healthy-beverages', 'healthy-desserts'] // Optional: restrict to valid sections
  }
}, {
    timestamps: true //adds createdAt and updatedAt
});


//Add an index to title and author for faster searches
recipeSchema.index({title:1, author:1});

module.exports.Recipe = mongoose.model('Recipe', recipeSchema);