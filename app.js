// isPrime? you divide it by itself and you don't get a remainder

const isPrime = (n) =>{
    let prime = true
    for(let i = 2;i<n;i++){
        console.log(i)
        if(n % i === 0){
            prime = false
            break
        }
    }
    return prime
}
//console.log(isPrime(20))


/*-----------------------------------------------------------------
Challenge: 01-addOne
Difficulty: Basic
Prompt:
Write a function called addOne that takes a single number as an argument and returns that number plus 1.
Examples:
addOne(1) //=> 2
addOne(-5) //=> -4
-----------------------------------------------------------------*/
// Your solution for 01-addOne here:
const addOne = (n) =>{
    return n + 1
}

//console.log(addOne(-3))

/*-----------------------------------------------------------------
Challenge: 02-addTwoNumbers
Difficulty: Basic  
Prompt:
Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
If either argument is not a Number, return the value of NaN.
Examples:
addTwoNumbers(5, 10) //=> 15
addTwoNumbers(10, -2) //=> 8
addTwoNumbers(0, 0) //=> 0
addTwoNumbers('Hello', 5) //=> NaN
-----------------------------------------------------------------*/

const addTwoNumbers = (n1, n2) =>{
    if(typeof(n1) === 'string' || typeof(n2) === 'string'){
        return NaN
    } else {
        return n1 + n2
    }
}
//console.log(addTwoNumbers(12, 20))

/*-----------------------------------------------------------------
Challenge: 03-sumNumbers
Difficulty: Basic  
Prompt:
- Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
- If the array is empty, return 0 (zero).
Examples:
sumNumbers([10]) //=> 10
sumNumbers([5, 10]) //=> 15
sumNumbers([2, 10, -5]) //=> 7
sumNumbers([]) //=> 0
-----------------------------------------------------------------*/
const sumNumbers = (arr) =>{
    let sum = 0
    arr.forEach((ele)=>{
        sum += ele
    })
    return sum
}
//console.log(sumNumbers([10, 40, 33]))

/*-----------------------------------------------------------------
Challenge: 04-addList
Difficulty: Basic
Prompt:
- Write a function called addList that accepts any quantity of numbers as arguments, adds them together and returns the resulting sum.
- Assume all parameters will be numbers.
- If called with no arguments, return 0 (zero).
Examples:
add(1) //=> 1
add(1, 50, 1.23) //=> 52.23
add(7, -12) //=> -5

Hint:  Check out the Further Study section of the JS Functions lesson regarding "rest parameters"
-----------------------------------------------------------------*/
const addList = (...nums) =>{
    let sum = 0
    for(num of nums){
        sum += num
    }
    return sum
}
//console.log(addList(-20, 5))

/*-----------------------------------------------------------------
Challenge: 05-computeRemainder
Difficulty: Basic
Prompt:
- Write a function named computeRemainder that accepts two numeric arguments and returns the remainder of the division of those two numbers.
- The first argument should be the dividend and the second argument should be the divisor.
- If a 0 is passed in as the second argument you should return JavaScript's special numeric value: Infinity.
- For extra fun, complete this challenge without using the modulus (%) operator.
Examples:
computeRemainder(10,2) //=> 0
computeRemainder(4,0) //=> Infinity
computeRemainder(10.5, 3) //=> 1.5
-----------------------------------------------------------------*/

const computeRemainder = (n1, n2) =>{
    const remainder = null
    if(n2 === 0){
        return Infinity
    } else {
        // const divided = n1/n2
        // console.log('this is divided',divided)
        return n1%n2
    }

}
// console.log(computeRemainder(10,2)) //=> 0
// console.log(computeRemainder(4,0)) //=> Infinity
// console.log(computeRemainder(10.5, 3))//=> 1.5

/*-----------------------------------------------------------------
Challenge: 06-range
Difficulty: basic
Prompt:
- Write a function called range that accepts two integers as arguments and returns an array of integers starting with the first argument up to one less than the second argument.
- The range function must be called with the first argument less than or equal to the second argument, otherwise return the string "First argument must be less than second".
Examples:
range(1,4) //=> [1,2,3]
range(-2, 3) //=> [-2,-1,0,1,2]
range(1,1) //=> []
range(5,2) //=> "First argument must be less than second"
-----------------------------------------------------------------*/
const range = (n1, n2) =>{
    const arr = []
    if(n1 > n2){
        return 'First argument must be less than second'}
    else{
        for(let i = n1; i<n2; i++){
            arr.push(i)
        }
    }
    return arr
}
// console.log(range(1,4)) //=> [1,2,3]
// console.log(range(-2, 3)) //=> [-2,-1,0,1,2]
// console.log(range(1,1)) //=> []
// console.log(range(5,2)) //=> "First argument must be less than second"
/*-----------------------------------------------------------------
Challenge: 07-reverseUpcaseString
Difficulty: Basic
Prompt:
- Write a function called reverseUpcaseString that accepts a single string argument, then returns the string with its characters in reverse order and converts all characters to uppercase.
Examples:
reverseUpcaseString("SEI Rocks!"); //=> "!SKCOR IES" 
-----------------------------------------------------------------*/
const reverseUpcaseString = (str) =>{
    return str.split('').reverse().join('').toUpperCase()
}
//console.log(reverseUpcaseString("SEI Rocks!")); //=> "!SKCOR IES" 

/*-----------------------------------------------------------------
Challenge: 08-removeEnds
Difficulty: Basic
Prompt:
- Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
- If the length of the string argument is less than 3, return an empty string.
Examples:
removeEnds('SEI Rocks!'); //=> "EI Rocks"
removeEnds('a'); //=> "" (empty string)
-----------------------------------------------------------------*/
const removeEnds = (str) =>{
    if(str.length < 3)return ''
    const newStr = str.slice(1, str.length -1)
    return newStr
}
//console.log(removeEnds('SEI Rocks!')); //=> "EI Rocks"
//console.log(removeEnds('a')); //=> "" (empty string)
//console.log(removeEnds('hellomyfriend'))

/*-----------------------------------------------------------------
Challenge: 09-charCount
Difficulty: Basic
Prompt:
- Write a function named charCount that accepts a single string argument and returns an object that represents the count of each character in the string.
- The returned object should have keys that represent the character with its value set to the how many times the character appears in the string argument.
- Upper and lower case characters should be counted separately.
- Space characters should be count too.
Examples:
charCount('hello') //=> { h: 1, e: 1, l: 2, o: 1 }
charCount('Today is fantastic!') //=> { T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1 }
-----------------------------------------------------------------*/
const charCount = (str) =>{
    const obj = {}
    for(ele of str){
        let sum = 0
        if(!obj[ele])obj[ele] = 1
        else obj[ele] += 1
    }
    return obj
}
//console.log(charCount('hello'))
//console.log(charCount('Today is fantastic!'))

/*-----------------------------------------------------------------
Challenge: 10-formatWithPadding
Difficulty: Basic
Prompt:
- Write a function called formatWithPadding that accepts three arguments:
  - A numeric argument (an integer) representing the number to format.
  - A string argument (a single character) representing the character used to "pad" the returned string to a minimum length.
  - Another numeric argument (an integer) representing the length to "pad" the returned string to.
- The function should return the integer as a string, "left padded" to the length of the 3rd arg using the character provided in the 2nd arg.
- If the length of the integer converted to a string is equal or greater than the 3rd argument, no padding is needed - just return the integer as a string.
Examples:
formatWithPadding(123, '0', 5); //=> "00123"
formatWithPadding(42, '*', 10); //=> "********42"
formatWithPadding(1234, '*', 3); //=> "1234"
-----------------------------------------------------------------*/
const formatWithPadding = (formattedNum, symb, lengthPad) =>{
    let newString = ''
    if(formattedNum.toString().length >= lengthPad){
        newString = formattedNum.toString()
    } else {
        newString = symb.repeat(lengthPad) + formattedNum.toString()
    }
    return newString

}
// console.log(formatWithPadding(1234, '*', 3))
// console.log(formatWithPadding(123, '0', 5))
// console.log(formatWithPadding(42, '*', 10))
// console.log(formatWithPadding(1234, '*', 3))


/*-----------------------------------------------------------------
Challenge: 11-isPalindrome
Difficulty: Intermediate
Prompt:
- Write a function called isPalindrome that accepts a single string argument, then returns true or false depending upon whether or not the string is a palindrome.
- A palindrome is a word or phrase that are the same forward or backward.
- Casing and spaces are not included when considering whether or not a string is a palindrome.
- If the length of the string is 0 or 1, return true.
Examples:
isPalindrome('SEI Rocks'); //=> false
isPalindrome('rotor'); //=> true
isPalindrome('A nut for a jar of tuna'); //=> true
isPalindrome(''); //=> true
-----------------------------------------------------------------*/
const isPalindrome = (str) => {
    let reverse = str.split('').reverse().join('').toLowerCase()
    reverse = reverse.split(' ').join('')
    let string = str.split(' ').join('').toLowerCase()
    if (str.length === 0 || str.length === 1) {
        return true
    }
    if (reverse === string) {
        return true
    } 
    else return false
}
console.log(isPalindrome('SEI Rocks'))
console.log(isPalindrome('rotor'))
console.log(isPalindrome('A nut for a jar of tuna'))
console.log(isPalindrome(''))