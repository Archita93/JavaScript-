// Built-in Math Object


// Number Constants such as 
// Pi
Math.PI;
// Euler
Math.E;
// Natural Log of 2
Math.LN2;


console.log(Math.PI);

// Rounding methods 
Math.ceil(); // rounds up
Math.floor(); // rounds down
Math.round();  // rounds up if .5 or above, rounded down otherwise
Math.trunc();  // trims the decimal, leaving only integer

console.log(Math.ceil(0.0001));
console.log(Math.ceil(1.1));
console.log(45/8);
console.log(Math.floor(45/8));


// Other methods:
Math.pow(2,3) // 2**3
Math.sqrt(81)  // 9
Math.cbrt(64);  // 4
Math.abs(-101);  // 101
Math.min(9,8,7);  // 7

// Logarithmic
Math.log();
Math.log2();
Math.log10();

// Trionometric
Math.sin();
Math.cos();
Math.tan();


// Random Method
var decimal = Math.random();
console.log(decimal);
console.log(decimal*10);
console.log(Math.ceil(decimal*10));