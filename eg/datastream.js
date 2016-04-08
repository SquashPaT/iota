var SerialPort = require("serialport").SerialPort;
var serialport = new SerialPort("/dev/cu.usbmodem1411");

serialport.on('data', function(data) {
    console.log('data received: ' + data);
});