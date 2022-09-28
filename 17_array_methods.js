let num = [1, 2, 3, 5, 8, 7, 6]

let b = num.toString() //Conver arrat to string
console.log(b, typeof b)

let c = num.join("_") //Join array element with '_' and convert to the string
console.log(c, typeof c)

let d = num.pop() //Remove last element from the oringinal array and return the pop value
console.log(d, num)

num.push(56) //Add new element to end of the array
console.log(num)

let e = num.shift() //Remove first element and return the value from the array. also it will modify the original array
console.log(e, num)

let f = num.unshift(22) //Add element to the beginning and return the new array length
console.log(f, num)

console.log(num.length)
delete num[0] //Remove element value from array. But it doesnot change the array length
console.log(num)
console.log(num.length)

let num2 = [125, 6, 7, 1, 5]
let newArray = num.concat(num2) //Join two array and return the new arrar
console.log("Array Concat: ",num, num2, newArray)

num2.sort() //sort element on alphabetly. Also it change the oringinal array
console.log(num2)