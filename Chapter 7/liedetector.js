function lieDetectorTest() {
	var lies = 0;
	var stolenDiamond = { }; //+1
	if (stolenDiamond) {
		console.log("You stole the diamond");
		lies++;
	}
var car = {
	keysInPocket: null //+0
};
if (car.keysInPocket) {
	console.log("Uh oh, guess you stole the car!");
	lies++;
}
if (car.emptyGasTank) { //+0
	console.log("You drove the car after you stole it!");
	lies++;
}
var foundYouAtTheCrimeScene = [ ]; //+1
	if (foundYouAtTheCrimeScene) {
		console.log("A sure sign of guilt");
		lies++;
}
if (foundYouAtTheCrimeScene[0]) { //+0
	console.log("Caught with a stolen item!");
	lies++;
}
var yourName = " ";
	if (yourName) {
		console.log("Guess you lied about your name"); //+1
		lies++;
}
return lies;
}
var numberOfLies = lieDetectorTest(); //total is 3
console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3) {
	console.log("Guilty as charged"); //prints guilty
}