RasPi-RC
========

Controlling an RC car connected to a RaspberryPi through the browser.

###Starting the server

	/RasPi-RC $ node app

###The Hardware
1. JADA Toys [RC Car](http://www.jadatoysinc.com/products?brand=BIGTIME_Muscle&category=Radio_Control&pagenum=1&id=2381) - ~$20 @ Target
2. Raspberry Pi
3. [L293D](http://www.adafruit.com/products/807) Motor Driver IC 

###Wiring
Wiring instructions based on [RoverPi Blog](http://roverpi.blogspot.com/2013/07/controlling-two-dc-motors-with.html), except the L293D's pins 1 and 9 are wired to +5v instead of the Pi's PWM.

![Wiring](//RasPi-RC%20wiring.png)
