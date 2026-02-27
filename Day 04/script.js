console.log("SECTION 1 — Variables & Assignment");


// 1 & 2
let name = "Dharanya";
let age = 20;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Student:", isStudent);

// 3 Swap without third variable
let a = 10;
let b = 20;
console.log("\nBefore Swap: a =", a, "b =", b);

[a, b] = [b, a];
console.log("After Swap: a =", a, "b =", b);

// 4 Output and why
let x = 10;
let y = x;
y = 20;
console.log("\n Output:", x); // 10

// 5 const rewrite
const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;
console.log("\nArea:", area);


console.log("\nSECTION 2 — Operators");

// 6
let num1 = 25;
let num2 = 7;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

// 7 Predict output
console.log("\n Outputs:");
console.log(5 + "5");   // "55"
console.log(5 - "2");   // 3
console.log(true + 1);  // 2

// 8 Compare with 100
let n = 100;
if (n > 100) console.log("\nGreater than 100");
else if (n === 100) console.log("\nEqual to 100");
else console.log("\nLess than 100");

// 9 == vs ===
console.log("\nOutput:");
console.log(5 == "5");   // true
console.log(5 === "5");  // false

// 10 Logical operators
let personAge = 60;
if (personAge >= 18 && personAge <= 60) console.log("\nEligible");
else console.log("\nNot Eligible");


console.log("SECTION 3 — Control Statements");


// 11 Even / Odd
let number = 17;
if (number % 2 === 0) console.log("Even");
else console.log("Odd");

// 12 FizzBuzz
let fb = 15;
console.log("\nFizzBuzz check for:", fb);
if (fb % 3 === 0 && fb % 5 === 0) console.log("FizzBuzz");
else if (fb % 3 === 0) console.log("Fizz");
else if (fb % 5 === 0) console.log("Buzz");
else console.log(fb);

// 13 Switch weekday
let day = 5;
console.log("\nWeekday for:", day);

switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid day");
}

// 14 For loop 1-20
console.log("\nNumbers 1-20:");
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 14 Even numbers
console.log("\nEven numbers 1-20:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

// 15 While sum 1 to N
let N = 10;
let sum = 0;
let i = 1;

while (i <= N) {
  sum += i;
  i++;
}
console.log("\nSum from 1 to", N, "=", sum);

// 16 break & continue
console.log("\nBreak & Continue:");
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  if (i === 8) break;
  console.log(i);
}


console.log("SECTION 4 — Functions");


// 17 Sum function
function add(x, y) {
  return x + y;
}
console.log("Add:", add(5, 6));

// 18 Arrow function
const addArrow = (x, y) => x + y;
console.log("Arrow Add:", addArrow(10, 20));

// 19 Prime function
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log("\nPrime check:");
console.log("7:", isPrime(7));
console.log("12:", isPrime(12));

// 20 Reverse string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("\nReverse:", reverseString("Dharanya"));

// 21 Return stops execution
function test() {
  return;
  console.log("Hello");
}
console.log("\nOutput:");
test(); // prints nothing

// 22 Largest in array
function largest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log("\nLargest:", largest([10, 55, 23, 99, 12]));


console.log("SECTION 5 — Integrated Challenge");

function calculateGrade(marks) {
  if (marks >= 90) return "A";
  else if (marks >= 75) return "B";
  else if (marks >= 50) return "C";
  else return "Fail";
}

let studentName = "Dharanya";
let marks = 82;
let grade = calculateGrade(marks);

let result;
if (grade === "Fail") result = "Not Passed";
else result = "Passed";

console.log("Student:", studentName);
console.log("Marks:", marks);
console.log("Grade:", grade);
console.log("Result:", result);
