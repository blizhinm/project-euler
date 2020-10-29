// https://projecteuler.net/problem=4

// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(value) {
  const valueAsString = value.toString();
  let reversed = '';

  for (let i = valueAsString.length - 1; i >= 0; i -= 1) {
    reversed += valueAsString[i];
  }

  return valueAsString === reversed;
}

function getBiggest(numbers) {
  let biggest = +numbers[0];

  for (const number of numbers) {
    if (+number > biggest) {
      biggest = +number;
    }
  }

  return biggest;
}

const palindromeNumbers = {};

for (let i = 10; i < 1000; i += 1) {
  for (let j = i; j < 1000; j += 1) {
    const mult = i * j;

    if (isPalindrome(mult) && !palindromeNumbers[mult]) {
      palindromeNumbers[mult] = `${i} * ${j}`;
    }
  }
}

const biggestPalindrome = getBiggest(Object.keys(palindromeNumbers));

console.log(`${biggestPalindrome} = ${palindromeNumbers[biggestPalindrome]}`);
