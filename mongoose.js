//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/todo_list_db');

//acquire the connection (to check if it is successful)
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'error connecting to the db'));

//up and running then print the messgae
db.once('open', function(){
    console.log("Successfully connected to the Database");
});