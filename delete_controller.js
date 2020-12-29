const db = require('../config/mongoose');
const Todo = require('../models/Todo');

module.exports.delete = function(req, res){
    //get id from the query in the url
    console.log(req.query.id);
    let id = req.query.id;

    //find the contact in db and delete it
    Todo.findByIdAndDelete(id, function(err){
        if(err){
            console.log("Error in deleting the contact From the Database", err);
            return;
        }
        return res.redirect('back');
    });
}
