const express = require('express');
const mongoose = require("mongoose");
const keys = require('./config/keys');
const PORT = 3000;

const parametersConnection = {
    useNewUrlParser : true,
    useUnifiedTopology: true

}

const app = express();

mongoose.connect( keys.mongoURI, parametersConnection);
 
app.get('/users', function(req, res){

    res.json({ "success" : true });

});


app.listen(PORT, function(){
    console.log("Node Server is Running");
});