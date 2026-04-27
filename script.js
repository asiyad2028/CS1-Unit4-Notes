// SINGLE LINE COMMENT 
/* MULTI-LINE COMMENT */

/* the js code below is an example STATEMENT (instruction/command) every statement ends in a SEMICOLON*/
console.log("hello world");

//VARIABLES are named storage containers for data

//DECLARE a new variable (make space)
let username; 

//ASSIGN a value to an existing variable 
username= "asiya";

//DECLARE + ASSIGN new variable in one line 
let starbucks= "caramel frappuccino";

// See the value of a variable 
console.log(username);
console.log(starbucks);

//Create a variable that holds a NUMBER 
let luckynum=11; //numbers dont need quotes
console.log(luckynum); 

//Change the value stored in a variable 
luckynum=3;
console.log(luckynum); 

// MATH OPERATORS (+, -, *, /)
let age = 15;
console.log(age);
let ageInTen = age + 10;
console.log(ageInTen);
let ageDogYears = age / 7;
console.log(ageDogYears);
let marcoHumanYears = 3 * 7;
console.log(marcoHumanYears);

//PEMDAS applies when you have multiple operators
let score = 0;
score = score + 8 - 9 / 21 * (4 + 6); 
console.log(score);  

//combine 2 "literal" Strings (concatenation)
console.log("My age is" + "age");
//or concatenate a literal string with a variable
console.log("My age is" + age)
console.log("My age in ten years will be" + ageInTen);
console.log("My age in dog years is" + ageDogYears);
//can slao concatenate while making varables
let user= "asiya"; 
let message= "welcome" + user + "!";
console.log(message);
/* FUNCTIONS; 
    Resuable sets of code statements that perform a specfic task/process/routine
*/ 

//console.log is a built-in function we use a console.log("I just used a function!");

//DEFINE (create) your own function
function prepareForSleep() {
    //STATEMENTS (actions) to execute for this routine
    console.log("1. Put on PJs");
    console.log("2. Brush teeth");
    console.log("3. Listen to music");
}

//CALL (use) our function 
prepareForSleep();
prepareForSleep(); // can call it again 

/* selection (CONDITIONALS)
a BOOLEAN EXPRESSION is like a question that has a boolean (true/false) answer */

console.log(30 > 10); //true
console.log("Q: is 10 less than 2?")
console.log(10 < 2);

//Check for EQUALITY use this -> == or (===)
console.log(10==10);
console.log(5==7); 
console.log(5 != 7); //!= is NOT equal 

// Can use these operators to compare strings
console.log("parrot" > "dog"); // false, P comes after D in the dictionary order (higher numerical value)
console.log("A" > "a"); //false
console.log("A" < "a"); //true
console.log("asiya" == "ASIYA"); //false

//Can use comparison operators between VARIABLES & VALUES 
let password = "abc123!"; 
console.log("abc123!" == password);

//Make decisions using IF STATEMENTS
let myAGE = 17;
if ( myAGE >= 17) {
// statements here only run if expression is TRUE
console.log("You are old enough to get your NY license")
}

//ELSE IF blocks test other options
else if (myAge==16) {
    console.log("You can get your leaners permit!")
}

//ELSE blocks handle the "otherwise..." case- always grouped with an if
else {
    console.log("Not elidgable for a license");
}