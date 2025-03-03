//////////////////PROBLEM 1////////////////////

// JavaScript doesn't care if you use single or double quotes for your strings
// Make a variable named greeting with a data type of string that says "Hi" (with double quotes)
// After the first variable, make a variable named farewell with a data type of string that says 'Goodbye' (with single quotes)

let greeting = "Hi";
let farewell = 'Goodbye';



//////////////////PROBLEM 2////////////////////

// Make a variable called hello with a data type of a string that says "Hello"
// Next, make a variable called userName with data types of string that is your name
// Concatenate hello and userName together and store the result in a variable called salutation

let hello = "Hello";
let userName = "Bret";
let salutation = hello + userName;



//////////////////PROBLEM 3////////////////////

//Create a variable called seven that has a number data type with the value of 7

let seven = 7;



//////////////////PROBLEM 4////////////////////

// Make a variable called money with a value equal to the amount you wish to have in your bank account in 2 years
// This datatype should be a number

let money = 999999999999999999999999999;



//////////////////PROBLEM 5////////////////////

// Make a variable called awesome and give it a value of the boolean data type true

let awesome = true;



//////////////////PROBLEM 6////////////////////

// Do not edit the code below.
let myCar = "Jeep";
// Do not edit the code above.


// Set the variable myCar to be null


myCar = null;



//////////////////PROBLEM 7////////////////////

// Create a variable called users which should be an array with 4 items in it
// Each item should be an object, and each object should have 2 properties: name (string) and age (number)

let users = [{name: "Bob",age: 9},{name: "Rob",age: 19},{name: "Job",age: 29},{name: "Tim",age: 3}]



//////////////////PROBLEM 8////////////////////

// Create a variable called family which should be an object
// This object should have 3 keys/properties which will be the names of people (you can choose these names)
// Each property will have a corresponding value which will be an object with one property called "hobbies"
// Each hobbies property will have a corresponding value which will be an object

let family = {
  bob: {
    hobbies:{
      
    }
  },
  rob: {
    hobbies:{
      
    }
  },
  job: {
    hobbies:{
      
    }
  },

};



//////////////////PROBLEM 9////////////////////

// Create a variable called gameScores which should be an array with 3 items in it
// Each item should be an array with 2 items (numbers) in each array

let gameScores = [
  [4,4],
  [5,4],
  [6,4]

];



//////////////////PROBLEM 10////////////////////

// Create a variable called people which should be an array of 3 objects
// Each object should have 3 properties: name (string), gender (string), height (number) in each array

let people = [
  {
    name: "bob",
    gender: "boy",
    height: 1
  },
  {
    name: "rob",
    gender: "boy",
    height: 1
  },
  {
    name: "job",
    gender: "boy",
    height: 1
  }
]



//////////////////PROBLEM 11////////////////////

// Create a variable called cowboy which should be an object
// This object should have 3 properties: name (string), state (string), favoriteCountrySong (string)

let cowboy = {
  name: "robert",
  state: "California",
  favoriteCountrySong: "Gangsta's Paradise"
}



//////////////////PROBLEM 12////////////////////

// Do not edit the code below.
const spaceship = {
	fuel: "liquid hydrogen",
	topSpeed: 36000,
	fuelLevel: 100,
	altitude: 0,
};

function launch() {
	spaceship.fuelLevel -= 30;
	spaceship.altidude += 1000;
}
// Do not edit the code above.


// Create a variable called dataTypes which should be an array of the following 6 items:
//   the number 42
//   the string "meaning"
//   the boolean true
//   an array with 5 numbers
//   the object spaceship (provided for you)
//   the function launch (provided for you)


let dataTypes = [
  42,
  "meaning",
  true,
  [1,2,3,4,5],
  spaceship,
  launch
]



//////////////////PROBLEM 13////////////////////

// Edit the function called "sum" so that when it is invoked, it returns the sum of its parameters num1 and num2

function sum(num1, num2){
  return num1 + num2;
};
  

  
//////////////////PROBLEM 14////////////////////
  
// Create two variables number1 and number2 and assign them number values

let number1 = 5;
let number2 = 6;


// Next, edit the function called "multiply" so that when it is invoked, it returns the result of multiplying number1 and number2

function multiply() {
  return number1*number2;
};



//////////////////PROBLEM 15////////////////////

// Do not edit the code below.
let food = 'pizza';
// Do not edit the code above.


// Edit the function favFood so that when it is invoked it returns the string "My favorite food is pizza"
// In your solution code, use template strings (not concatenation) and use the food variable provided

function favFood(){
  return `My favorite food is ${food}`;
};



//////////////////PROBLEM 16////////////////////

// Do not edit the code below.
let theName = 'Jeremy';
let theBoss;
// Do not edit the code above.


// Edit the function assignName so that when it is invoked with the variable theName passed in as an argument,
// the function assigns the value of theName to theBoss variable

function assignName(name){
  if(name === theName){
    theBoss = theName;
  }
};



//////////////////PROBLEM 17////////////////////

// Do not edit the code below.
let user = {
  name: "Billy",
  age: 18,
  email: "billy123@billy.com"
};
// Do not edit the code above.


// Using the user object provided,
// edit the function getName so that it accesses the name property of the user object and returns its value

function getName(userObj){
  return user.name;
};



//////////////////PROBLEM 18////////////////////

// Do not edit the code below.
let calendar = {
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  weekDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
}
// Do not edit the code above.


// Edit the function getWeekDay so that it returns the 3rd item in the weekDays array stored in the calendar object

// In your solution, use the correct notation to access the value "Tuesday" and do not simply return the string "Tuesday"
// Make sure you are accessing it from the weekDays array of the calendar object

function getWeekDay(calendar){
  return calendar.weekDays[2];
}



//////////////////PROBLEM 19////////////////////

// Create a function called "fn" that takes in a parameter and returns that parameter

function fn(butt){
  return butt;
}



//////////////////PROBLEM 20////////////////////

// Do not edit the code below.
let firstName = "Indiana";
let lastName = "Jones";
// Do not edit the code above.


// Create a function called createName that takes in no parameters and returns the result of concatenating firstName and lastName (provided)
// The returned value should include a space between the first and last names and should use concatenation (not template strings)

function createName(){
  return firstName+ " "+ lastName;
}



//////////////////PROBLEM 21////////////////////

// Create a function called showMeSeven that returns the number 7

function showMeSeven(){
  return 7;
}



//////////////////PROBLEM 22////////////////////

// Create a function called multiplier that takes two parameters (numbers) and returns the product of the two parameters

function multiplier(x, y){
  return x*y;
}


//////////////////PROBLEM 23////////////////////

// Create a function called sayHello that takes two parameters: a greeting (string) and a name (string)
// This function should return a string that is the result of concatenating the greeting and name parameters
// The returned value should include a space between the greeting and name parameters

function sayHello(greeting, name){
  return greeting + " " + name;
}



//////////////////PROBLEM 24////////////////////

// Create a function called makeExercise that takes two parameters: exerciseName (string) and duration (number)
// This function should return an object with two key-value pairs:
  // the first property should be exerciseName with the value of the first parameter
  // the second property should be duration with the value of the second parameter

function makeExercise(exerciseN, d){
  return {
    exerciseName: exerciseN,
    duration: d
  }
}



//////////////////PROBLEM 25////////////////////

// Do not edit the code below.
let age = "TBD";
// Do not edit the code above.


// Inside the isOldEnough function, write an if/else statement that will return "old enough" if the age variable is greater than 21 and returns "not yet" otherwise
// Use the if and else keywords in your solution
// The variable age will be changed during testing

function isOldEnough(){
  if(age > 21){
    return "old enough"
  }
  else{
    return "not yet";
  }
};



//////////////////PROBLEM 26////////////////////

// Do not edit the code below.
let workEthic = "TBD";
// Do not edit the code above.


// Inside the successPredictor function, write an if/else statement that will return "success at DevMountain" if the workEthic variable is "great" and returns "failure at DevMountain" otherwise
// Use the if and else keywords in your solution
// The variable workEthic will be changed during testing

function successPredictor(){
  if(workEthic === "great"){
    return "success at DevMountain";
  }
  else{
    return"failure at DevMountain";
  }
};



//////////////////PROBLEM 27////////////////////

// Do not edit the code below.
let cookieType = "TBD";
// Do not edit the code above.


// Inside the eatOrTrash function, write an if/else statement that will return "throw in trash" if the cookieType variable is "raisin" and returns "eat" otherwise
// Use the if and else keywords in your solution
// The variable cookieType will be changed during testing

function eatOrTrash(){
  if(cookieType==="raisin"){
    return "throw in trash";
  }
  return "eat";
};



//////////////////PROBLEM 28////////////////////

// Do not edit the code below.
let myTeamScore = "TBD";
let yourTeamScore = "TBD";
// Do not edit the code above.


// Inside the finalScore function, write an if/else statement that will return "we are the champions" if the myTeamScore variable is greater than the yourTeamScore variable and returns ":(" otherwise
// Use the if and else keywords in your solution
// The myTeamScore and yourTeamScore variables will be changed during testing

function finalScore(){
  if(myTeamScore > yourTeamScore){
    return "we are the champions";
  }
  return ":(";
};



//////////////////PROBLEM 29////////////////////

// Do not edit the code below.
age = "TBD";
// Do not edit the code above.


// Inside the findCorrectTransportation function, write an if/else statement that will check the age variable and return the correct response according to the following criteria:
  // if age is from 3 to 7, return "tricycle"
  // if age is from 8 to 15, return "bicycle"
  // if age is greater than 15, return "car"

// Use the if and else keywords in your solution
// The variable age will always be a number and will be changed during testing

function findCorrectTransportation(){
  if(age >= 3 && age <=7){
    return "tricycle";
  }
  else if(age >= 8 && age <=15){
    return "bicycle";
  }
  else if(age > 15){
    return "car";
  }
};



//////////////////PROBLEM 30////////////////////

// Do not edit the code below.
let cash = "TBD";
let temp = "TBD";
// Do not edit the code above.


// Inside the doIGetIceCream function, write an if/else statement that will check the cash and temp variables and return the correct response according to the following criteria:
  // if temp is equal to "hot" and money is true, return "Get Ice Cream!"
  // otherwise return "Save up for another day."

// Use the if and else keywords in your solution
// The variable age will always be a number and will be changed during testing

function doIGetIceCream(){
  if(temp === "hot" && cash){
    return "Get Ice Cream!";
  }
    return "Save up for another day."
};



//////////////////PROBLEM 31////////////////////

// Do not edit the code below.
let chores = "TBD";
let work = "TBD";
// Do not edit the code above.


// Inside the doIHaveFreeTime function, write an if/else statement that return "free time!" if either chores or work are false

// In your solution, be sure to use the logical NOT operator (bang operator) instead of using true or false keywords
// Use the if and else keywords in your solution
// The chores and work variables will always be true or false and will be changed during testing

function doIHaveFreeTime(){
  if(!chores||!work){
    return "free time!";
  }
};



//////////////////PROBLEM 32////////////////////

// Do not edit the code false.
let crash = false;
let currentSpeed = "TBD";
let brakes = "TBD";
// Do not edit the code above.


// Inside the setCrash function, write an if/else statement that will set the value of crash to true if currentSpeed is "fast" and brakes is false and does nothing otherwise

// In your solution, be sure to use the logical NOT operator (bang operator) instead of using true or false keywords
// Use the if and else keywords in your solution
// The currentSpeed variables will always be a string and will be changed during testing
// The brakes variables will always be a boolean and will be changed during testing

function setCrash(){
  if(currentSpeed === "fast" && !brakes){
    crash=true;
  }
};



//////////////////PROBLEM 33////////////////////

// Do not edit the code below.
user = {
  name: "Tiffany",
  total: 50
}
// Do not edit the code above.


// Write a function called makePurchase that takes in a parameter called priceOfItem
// If priceOfItem is less than or equal to the total on the user object (provided), have the makePurchase function subtract priceOfItem from the user's total
// If the priceOfItem is greater than the user total, makePurchase should return "not enough funds"

// Use the if and else keywords in your solution
// The arguments passed into makePurchase will always be numbers and will be changed during testing

function makePurchase(priceOfItem){
  if(priceOfItem <= user.total){
    user.total -= priceOfItem;
  }
  else{
    return "not enough funds";
  }
}



//////////////////PROBLEM 34////////////////////

// Do not edit the code below.
let hunger;
let fatigue;

function eat(){
  hunger = "gone";
  return "yum yum";
}

function sleep(){
  fatigue = "gone";
  return "zzz zzz zzz";
}
// Do not edit the code above.


// Write a function called decisionMaker that takes two parameters hungry and tired and and reacts according to the following criteria:
  // if hungry is true and tired is false, invoke the eat function (provided)
  // if hungry is false and tired is true, invoke the sleep function (provided)
  // otherwise, return the string "undecided"

// In your solution, be sure to use the logical NOT operator (bang operator) instead of using true or false keywords
// Use the if and else keywords in your solution
// The arguments passed into decisionMaker will always be true or false and will be changed during testing

function decisionMaker(hungry, tired){
  if(hungry && !tired){
    return eat();
  } 
  else if(!hungry && tired) {
    return sleep();
  }
  else{
    return "undecided";
  }
}