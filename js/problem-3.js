// https://projecteuler.net/problem=3

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function getPrimeFactors(num) {
  const EVEN_DIGITS = [0, 2, 4, 6, 8];
  const factors = [];

  while(num > 1) {
    const isEven = EVEN_DIGITS.includes(num % 10);
    const startNumber = isEven ? 2 : 3;
    let isDivisible = false;

    for (let i = startNumber; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        factors.push(i);
        num = Math.floor(num / i);
        isDivisible = true;

        break;
      }
    }

    if (!isDivisible) {
      factors.push(num);
      num = 1;
    }
  }

  return factors;
}

const primeFactors = getPrimeFactors(600851475143);

console.log(primeFactors[primeFactors.length - 1]);
