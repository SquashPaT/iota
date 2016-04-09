var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('src/views'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

//var SerialPort = require("serialport").SerialPort;
//var serialport = new SerialPort("/dev/cu.usbmodem1411", {
//    parser: SerialPort.parsers.readline('\n')
//});


var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

var port = new SerialPort('/dev/cu.usbmodem1411', {
    parser: serialport.parsers.readline('\n')
});

var streamObj = {};
port.on('data', function(data) {
    streamObj = data;
    // streamObj = JSON.parse('{"herzfrequenz":"433","sauerstoffgehalt":"298","puls":"181"}');

    // console.log('data received: ' + streamObj);
});

app.get('/', function(req, res) {
    res.render('index');
});

var port = 5000;
app.listen(port, function(err) {
    console.log('Running on port ' + port);
});