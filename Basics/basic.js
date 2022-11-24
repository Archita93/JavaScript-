console.log('Hello World!')

// However, if I choose to print Hello World in a different color and front-size, one could use
// %c to declare the string within "" and then, once separate by a comma, one could use appropriate 
// CSS attributes

console.log("%cHello World","color: blue; font-size: 40px");
console.log("%chELLO wORLD", "color:  blue; font-size: 40px")


// Concatenation fo Strings using a varible
var name = 'Angela';
console.log("My name is "+name);
name = "Archita";
console.log("My name is",name)

// Arithmetic Operators
// + Addition
// - Subtraction
// / Division
// * Multiplication
// ** Exponential
// % Module - remainder

console.log(2+2);
console.log(1+2+3+4+5);
console.log(20-18);
console.log(2*3);
console.log(10/3);
console.log(10**2);
console.log(10%2);

// If Paranthesis () is not used, JS follows standard mathematical operations sequence

console.log(4+2*8-6);
console.log((4+2)*(8-6))

// Comparison Operators
// > Less than 
// < More than
// == Equal
// != Not equal

console.log(10 < 5);
console.log(2+5 == 6+1);

// Logical Operators
// && And
// || Or
// ! Not

console.log(3<5 && 10<210);

console.log("-----------------------------------------------------------------")
// == only checks for value
console.log(100 == "100");  // true

// === checks for value and type - strict equality operator
console.log(100 === "100")  // false

// != inequality operator 
console.log(1 != "1");    // false

// !== strict inequality operator: value as well as type
console.log(1 !== "1");   // true

// result of concatenation between a string a number is a string
console.log(365 + " days");
console.log(1+"2");

// Left-to-Right associativity
console.log(5 > 4 > 3);
// Answer: False
// 5>4 is true ~ 1, 1>3 is false