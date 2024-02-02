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
