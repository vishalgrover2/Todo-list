const db = require('../config/mongoose');
const Todo = require('../models/Todo');

// Rendering the page using home.ejs file
module.exports.home = function(req, res){
    Todo.find({}, function(err, lists){
        if(err){
            console.log("Error in fetching the details from the database");
            return;
        }
        return res.render('home',{
            title:"Todo-List",
            Todos: lists
        });
    });
}