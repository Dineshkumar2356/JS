console.log('Fibonacci Series')

function printFibonacci(n) {
  let a = 0, b = 1, c;
  console.log(a);
  console.log(b);
  for (let i = 2; i < n; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}
 

printFibonacci(10); // prints the first 10 numbers in the Fibonacci series

console.log('Factorial');

// program to find the factorial of a number

// take input from the user
const number = 5;

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}

console.log('prime number or not')

// program to check if a number is prime or not

// take input from the user

const number1 = 6;
let isPrime = true;

// check if number is equal to 1
if (number1 === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number1 > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number1; i++) {
        if (number1 % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number1} is a prime number`);
    } else {
        console.log(`${number1} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}

let b=10;
var B=5;
console.log(b)
y=5; 
z=2; 
x=y+z;

x=5+5; 
document.write(x); 
x="5"+"5"; 
console.log(x) 
x=5+"5"; 
console.log(x)
x="5"+5; 

console.log(x)


console.log("***********String Programs**********")

console.log("*****String Reverse******")
let s = "Dinesh"
let rev = ""
for(let i=s.length-1;i>=0;i--){
    rev = rev+s.charAt(i)
    
}
console.log(rev)

console.log("Palindrome")

let s1 = "malayalam"
let rev1 = ""
for(let i=s.length-1;i>=0;i--){
    rev = rev+s.charAt(i)
    
}if(s1.match(rev1)){
    console.log("This is a Palindrome")
}else{
    console.log("This is not a Palindrome")
}


console.log("****String Occurance****")


let count = 0;
let string = "Welcome to JavaScript";
let letterToCheck = "a";

for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === letterToCheck) {
        count += 1;
    }
}

console.log(count);

console.log("*****longest Substring********")

let maxLength = 0;
let currentSubstring = "";
let inputString = "abcabcbb";

for (let i = 0; i < inputString.length; i++) {
    const currentChar = inputString.charAt(i);
    const charIndex = currentSubstring.indexOf(currentChar);

    if (charIndex !== -1) {
        
        currentSubstring = currentSubstring.slice(charIndex + 1);
    }

    
    currentSubstring += currentChar;

    maxLength = Math.max(maxLength, currentSubstring.length);
}

console.log("Length of the longest substring without repeating characters: " + maxLength);



