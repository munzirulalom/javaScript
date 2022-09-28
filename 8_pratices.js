/** 1. Use logical operator to find whether the age lies between 10 and 20 */
let a = 10
if (a>=10 && a<=20){
    console.log('The age is between 10 and 20')
} else {
    console.log('Your age does not lies 10 and 20')
}

/** 2. Demonestrate Swithc case*/
//Check 7_switch_case.js

/** 3. Find whether a number is divisiable by 2 and 3 */
let b = 12
if (a%2 == 0 && a%3 == 0) {
    console.log('The number is divisible by 2 and 3')
} else {
    console.log('The number is not divisible by 2 and 3')
}

/** 4. Find whether a number is divisiable by 2 or 3 */
let c = 12
if (c%2 == 0 || c%3 == 0) {
    console.log('The number is divisible by 2 or 3')
} else {
    console.log('The number is not divisible by 2 or 3')
}

/** 5. Print 'You can Drive' or 'You cannot drive' based on age being greater than 18 using ternary operator */
let d = 18
let e = (d>=18)? 'You can Drive' : 'You cannot Drive'
console.log(e)