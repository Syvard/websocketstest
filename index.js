var express = require('express');

//App Setup
var app = express();
var port = 3000;
var server = app.listen(port, function(){
    console.log("Listening to requests on port " + port);
});

//Static Files
app.use(express.static('public'));