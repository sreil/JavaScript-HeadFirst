var phrase = "the cat in the hat";

var index = phrase.indexOf("cat");
console.log("there's a cat sitting at index " + index);

index = phrase.indexOf("the", 5); //5 is starting index of search
console.log("there's a the sitting at index " + index);

index = phrase.indexOf("dog");
console.log("there's a dog sitting at index " + index); //returns -1 if can't find