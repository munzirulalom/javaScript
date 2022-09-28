/**Question 1: Crate a variable of type string and try to add a number to it */
let a = "This is a String"
let b = 31
console.log(a + b)

/**Question 2: Use type of opetator to find the datatype of the string in last question*/
console.log(typeof (a+b))

/**Question 3: Create a const object in javaScript. Can you change it to hold number later */
const items = {
    name : 'Rahim',
    age : 25
}
console.log(items)

/**Question 4: Try to add a new key to the const object in proble 3. Where you able to do that? */
items['fearind'] = 'Rohan'
items['name'] = 'Karim'
console.log(items)

/**Question 5: Write a JS Proggram to create a word-meaning dicitionary of 5 words */
const dict = {
    galvanize   : 'to startle into sudden activity',
    liberation  : 'the act or fact of gaining equal rights or full social or economic opportunities for a particular group.',
    suffrage    : 'the right to vote, especially in a political election.'
}
console.log(dict)