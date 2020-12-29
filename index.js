// Require express
const express = require('express');
const app = express();
// Specify port number
const port = 8000;
// require mongoose 
const db = require('./config/mongoose');
const Todo = require('./models/Todo');


//set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// for Data Parsing in form of objects from url
app.use(express.urlencoded());

//Path for css File 
app.use(express.static('assets'));

//use express router and navigate to routes folder index.js
app.use('/', require('./routes'));

// Listen to the port
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
});
