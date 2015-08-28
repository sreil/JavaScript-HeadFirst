function makeCar() {
			//several options to chose from
			var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
			var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
			var years = [1955, 1957, 1948, 1954, 1961];
			var colors = ["red", "blue", "tan", "yellow", "white"];
			var convertible = [true, false];

			//combine value from arrays randomly 
			var rand1 = Math.floor(Math.random() * makes.length);
			var rand2 = Math.floor(Math.random() * models.length);
			var rand3 = Math.floor(Math.random() * years.length);
			var rand4 = Math.floor(Math.random() * colors.length);
			var rand5 = Math.floor(Math.random() * 5) + 1; //have at least one passenger in car
			var rand6 = Math.floor(Math.random() * 2); //2 for whether it is convertible or not

			var car = {
				make: makes[rand1],
				model: models[rand2],
				year: years[rand3],
				color: colors[rand4],
				passengers: rand5,
				convertible: convertible[rand6],
				mileage: 0 //new car
			};
			return car; //returns new car object
		}

		function displayCar(car)
		{
			console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
		}

		var carToSell = makeCar();
		displayCar(carToSell);
		//first call make car then assign the value it returns to carToSell
		//then pass the car object returned from makeCar to displayCar