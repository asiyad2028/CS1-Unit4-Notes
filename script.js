// SINGLE LINE COMMENT 
/* MULTI-LINE COMMENT */

/* the js code below is an example STATEMENT (instruction/command) every statement ends in a SEMICOLON*/
console.log("hello world");


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
