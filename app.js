var PORT=8999;
var express = require('express');
var rc = require('./rc');
var app = express();

var pinsOpen=false;

app.use('/scripts', express.static(__dirname + '/scripts'));

app.get('/left', function(req, res){
  rc.left();
  res.send('LEFT');
});
app.get('/right', function(req, res){
  rc.right();
  res.send('RIGHT');
});
app.get('/straight', function(req, res){
  rc.straight();
  res.send('STRAIGHT');
});
app.get('/forward', function(req, res){
  rc.forward();
  res.send('FORWARD');
});
app.get('/reverse', function(req, res){
  rc.reverse();
  res.send('REVERSE');
});
app.get('/stop', function(req, res){
  rc.stop();
  res.send('STOP');
});
app.get('/', function(req, res) {
   res.sendfile('./views/index.html');
});

//close pins when the app is closed via ctrl-c
process.on('SIGINT', function() {
  console.log('Got SIGINT');
  rc.closePins(function(){
    server.close();
    process.exit();
  });
});

//start up the http server
var server=app.listen(PORT);
//open the GPIO pins for operating the car
rc.openPins(function(){pinsOpen=true; console.log(pinsOpen);});

console.log('Listening on port '+PORT);;
