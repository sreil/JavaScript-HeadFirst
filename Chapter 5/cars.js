var cadi = {
	make: "GM",
	model: "Cadillac",
	year: 1955,
	color: "tan",
	passengers: 5,
	converitble: false,
	mileage: 12892,
	start: function() {
		this.started = true;
	},
	stop: function() {
		this.started = false;
	},
	drive: function()
	{
	if (this.started) {
		alert(this.make + " " +
		this.model + " goes zoom zoom!");
	} else {
		alert("You need to start the engine first.");
		}
	}
};

var chevy = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "red",
	passengers: 2,
	converitble: false,
	mileage: 1021
	start: function() {
		this.started = true;
	},
	stop: function() {
		this.started = false;
	},
	drive: function()
	{
	if (this.started) {
		alert(this.make + " " +
		this.model + " goes zoom zoom!");
	} else {
		alert("You need to start the engine first.");
		}
	}
};

var taxi = {
	make: "Webville Motors",
	model: "Taxi",
	year: 1955,
	color: "yellow",
	passengers: 4,
	convertible: false,
	mileage: 281341
	start: function() {
		this.started = true;
	},
	stop: function() {
		this.started = false;
	},
	drive: function()
	{
	if (this.started) {
		alert(this.make + " " +
		this.model + " goes zoom zoom!");
	} else {
		alert("You need to start the engine first.");
		}
	}
};

cadi.start();
cadi.drive();
cadi.stop();
chevy.start();
chevy.drive();
chevy.stop();
taxi.start();
taxi.drive();
taxi.stop();