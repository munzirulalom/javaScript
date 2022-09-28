/** 1. What will the following print in JavaScript */
console.log("Har\"".length)

/** 2. Explore the includes, stratWith & endWith of function */

const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

/** 3. Write a program to convert a given string to lowercase */
console.log(sentence.toLowerCase());

/** 4. Extract the amount out of this string */
let str = "The ammount is USD 35"

console.log(str.slice("The ammount is USD ".length))
console.log(typeof str.slice("The ammount is USD ".length))
console.log( typeof Number.parseInt(str.slice("The ammount is USD ".length)))

/** 5. Try to change 4th character of a given string */
//This is not possible to changed, beacuse string is not immutable