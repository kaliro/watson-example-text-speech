var express = require('express');
var path = require('path');

var app = express();

// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

module.exports = app;