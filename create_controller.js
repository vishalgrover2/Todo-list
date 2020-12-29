// Require express and database
const express = require('express');
const app = express();
const db = require('../config/mongoose');
const Todo = require('../models/Todo');

// defining mongoose from where to fetch values using req.body and redirect back to page
module.exports.create = function(req, res){
    Todo.create({
        description:req.body.description,
        category_selected:req.body.category_selected,
        date:req.body.date
    }, function(err, newTodo){
        if(err){
            console.log("Error in creating Todo");
            return;
        }
        console.log("::::::::newTodo", newTodo);
        return res.redirect('back');
    });
}