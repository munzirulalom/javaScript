/** Premmitives */
/**
 * There are 7 type of premitive pre-defined data types in javaScript. Which is "NNSSBBU"
 * N => Null
 * N => Number
 * S => Symbol
 * S => Sting
 * B => Boolean
 * B => Bigint
 * U => Undefined
 * 
 */
let a = null
let b = 345;
let c = true;
let d = BigInt("567")
let e = "Harry"
let f = Symbol("I am a symbol")
let g = undefined //OR let g

console.log(a, b, c, d, e, f, g)
console.log(typeof c)

/** Object */
/**
 * Object is a key value pairs.
 * 
 * Object is nonpremitives data type in javaScript
 */
const item = {
    "Rahim" : true,
    "Karim" : false,
    "Salam" : 67,
    "Rohan" : undefined
}
console.log(item["Rohan"])