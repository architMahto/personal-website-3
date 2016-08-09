var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');
var port = process.env.PORT || 3000;

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + '/public')));

app.listen(port, function() {
  console.log("You are connected to port:", port);
});
