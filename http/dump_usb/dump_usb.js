var serialport = require("serialport");
var SerialPort = serialport.SerialPort; // localize object constructor

// var modem = '/dev/cu.usbmodem14141'; 
var modem = process.argv[2];

var serialPort = new SerialPort(modem, {
  baudrate: 9600,
  parser: serialport.parsers.readline("\n")
});

serialPort.on("open", function () {
  console.log('open');
  serialPort.on('data', function(data) {
    // console.log(data.toString());
    console.log(data);
  });
});
