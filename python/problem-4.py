# https://projecteuler.net/problem=4

# A palindromic number reads the same both ways.
# The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

# Find the largest palindrome made from the product of two 3-digit numbers.

palindrome_numbers = {}

def maxNumber(numList):
    biggest = numList[0]

    for num in numList:
        if num > biggest:
            biggest = num

    return biggest

def isPalindrome(value):
    return str(value) == str(value)[::-1]


for i in range(100, 1000):
    for j in range(i, 1000):
        mult = i * j

        if isPalindrome(mult) and not palindrome_numbers.get(mult):
            palindrome_numbers[mult] = f'{i} * {j}'

biggestPalindrome = maxNumber(list(palindrome_numbers.keys()))
# biggestPalindrome = max(palindrome_numbers.keys())

print(f'{biggestPalindrome} = {palindrome_numbers[biggestPalindrome]}')
