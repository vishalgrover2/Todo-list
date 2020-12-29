// Require mongoose
const mongoose = require('mongoose');

//Create Schema for Database with fields required
const todoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category_selected:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});
//Name it and export
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;