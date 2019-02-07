var express = require('express');
var socket = require('socket.io');

//App Setup
var app = express();
var port = 3000;
var server = app.listen(port, function(){
    console.log("Listening to requests on port " + port);
});

//Static Files
app.use(express.static('public'));

//Socket setup
var io = socket(server);

io.on('connection', function(socket){
  console.log('Connection Established', socket.id);
});