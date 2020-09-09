/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 19;

if(votingAge >= 18){
  console.log("true")
} else {
  console.log("false")
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let dog ="pitbull";
let adorable = "Yes";

if(adorable === "Yes"){
    dog = "Pitbulls are adorable, indeed."
} else{
    dog = "You are very wrong and you don't deserve pitbulls."
}

console.log(dog);


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let year = "1999";

if(year == 1999){
    year = parseInt("1999");
    console.log(year);
}




//Task d: Write a function to multiply a*b 
const a = 0;
const b = 100;


function multiply(a, b){
    return a * b;
}

console.log(multiply(5,200));




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
let yourAge = 20;

function dogYears(yourAge){
    return yourAge * 7;
}

console.log(dogYears(yourAge));




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dog(age, weight) {
    if(age >= 1 && weight <= 5) {
      return weight * 0.05
    }else if(age >= 1 && weight >= 6 && weight <= 10) {
      return weight * 0.04
    }else if(age >= 1 && weight <= 11 && weight < 15) {
      return weight * 0.03
    }else if(age >= 1 && weight >= 15) {
      return weight * 0.02
    }else if(age < 1 && age >= 0.66) {
      return weight * 0.04
    }else if(age < .66 && age >= 0.333) {
      return weight * 0.05
    }else if(age < .33 && age >= 0.01) {
      return weight * 0.1
    }
  }
  
  console.log(dog(1, 15));



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
var userSelection = prompt("rock, paper, or scissors?");
var computerSelection = Math.random(0, 1);
if (computerSelection <= 0.33) {
  computerSelection = "rock";
} else if(computerSelection <= 0.66){
  computerSelection = "paper";
} else {
  computerSelection = "scissors"
}

function game(userChoice, computerChoice){
    if(userChoice === computerChoice){
      return "It's a tie.";
    }
    if (userChoice === "rock"){
      if (computerChoice === "scissors"){
        return "You've bested you're opponent.";
    } else {
      return "You've been bested."
      }
    }
    if (userChoice === "paper"){
      if (computerChoice === "rock"){
        return "You've bested you're opponent.";
    } else {
      return "You've been bested."
      }
    }
    if (userChoice === "scissors"){
      if (computerChoice === "paper"){
        return "You've bested you're opponent.";
    } else {
      return "You've been bested."
      }
    }
}

console.log("You have selected " + userSelection);
console.log("Computer selected " + computerSelection);
console.log(game(userSelection, computerSelection));
  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function milesConverter(km, miles){
  miles = km * 0.621371;
  return miles;
}
console.log(milesConverter(5))




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function cmConverter(feet, cm){
  cm = feet * 30.48;
  return cm;
}
console.log(cmConverter(10))




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
var sodas;

for(sodas = 99; sodas > 0; sodas--){
  console.log(sodas + " bottles of soda on the wall, " + sodas + " bottles of soda, take one down pass it around "  + (sodas - 1) + " bottles of soda on the wall")
}




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
var percent = Math.floor(Math.random() * 101);

if (percent >= 90){
  console.log("A");
} else if (percent >= 80 && percent < 90){
  console.log("B");
} else if (percent >= 70 && percent < 80){
  console.log("C");
} else if (percent >= 60 && percent < 70){
  console.log("D");
} else {
  console.log("F");  
}
console.log(percent);

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





