# https://projecteuler.net/problem=3

# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143 ?

import math

def getPrimeFactors(num):
    even_numbers = [0, 2, 4, 6, 8]
    factors = []

    while(num > 1):
        is_even = num % 10 in even_numbers
        start = 2 if is_even else 3
        is_divisible = False

        for i in range(start, int(math.sqrt(num)) + 1, 2):
            if num % i == 0:
                factors.append(i)
                num = num // i
                is_divisible = True

                break

        if not is_divisible:
            factors.append(num)
            num = 1

    return factors

primeFactors = getPrimeFactors(600851475143)

print(f'prime factors: {primeFactors}')
print(f'largest: {primeFactors[-1]}')
