var dog = {
	name: "Fido",
	weight: 20.2,
	age: 4,
	breed: "mixed",
	activity: "fetch balls"
};

var bark;

if(dog.bark > 20) 
{
	bark = "WOOF WOOF";
}
else {
	bark = "woof woof";
}

var speak = dog.name + " says " + dog.bark + " when he wants to " + dog.activity;
console.log(speak);