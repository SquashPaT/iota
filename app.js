var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('src/views'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

var SerialPort = require("serialport").SerialPort;
var serialport = new SerialPort("/dev/cu.usbmodem1411");

var streamObj = {};
serialport.on('data', function(data) {
    // console.log('data received: ' + data);
    streamObj = data;
});

app.get('/', function(req, res) {
    res.render('index', {title: 'hello world', number2: 334});
});

var port = 5000;
app.listen(port, function(err) {
    console.log('Running on port ' + port);
});