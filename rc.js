var gpio = require("pi-gpio");

var leftPin=22;
var rightPin=18;
var forwardPin=16;
var reversePin=12;

//pinsOpened callback for when all pins are opened
function openPins(pinsOpened){
  var count=0;
  var doOpen=function(pin){
    gpio.open(pin, "output", function(err){
      console.log("Opened pin #"+pin);
      if(++count==4){
        console.log("All pins opened");
        pinsOpened();
      }
    });
  }
  console.log("Opening pins...");
  doOpen(leftPin);
  doOpen(rightPin);
  doOpen(forwardPin);
  doOpen(reversePin);
}
function closePins(pinsClosed){
  var count=0;
   var doClose=function(pin){
    gpio.write(pin,0,function(err){
      gpio.close(pin, function(err){
        console.log("Closed pin #"+pin);
        if(++count==4){
          console.log("All pins closed");
          pinsClosed(); 
        }
      });
    });
  }
  console.log("Closing pins...");
  doClose(leftPin);
  doClose(rightPin);
  doClose(forwardPin);
  doClose(reversePin);
}

function left(){
  console.log("Left...");
  gpio.write(rightPin, 0);
  gpio.write(leftPin, 1);
}
function right(){
  console.log("Right...");
  gpio.write(leftPin, 0);
  gpio.write(rightPin, 1);
}
function straight(){
  console.log("Straight...");
  gpio.write(leftPin, 0);
  gpio.write(rightPin, 0);
}
function forward(){
  console.log("Forward...");
  gpio.write(reversePin, 0);
  gpio.write(forwardPin, 1);
}
function reverse(){
  console.log("Reverse...");
  gpio.write(forwardPin, 0);
  gpio.write(reversePin, 1);
}
function stop(){
  console.log("Stop...");
  gpio.write(forwardPin, 0);
  gpio.write(reversePin, 0);
}

exports.openPins=openPins;
exports.closePins=closePins;
exports.left=left;
exports.right=right;
exports.straight=straight;
exports.forward=forward;
exports.reverse=reverse;
exports.stop=stop;
