var express = require('express');

var app = express();

var port = 5000;

app.listen(port, function(err) {
    console.log('Running on port ' + port);
});