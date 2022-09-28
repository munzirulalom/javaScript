let a = [1, 2, 3, 4, 5]

a[7] = 8 //Adding a new value to the arry

console.log(a[0])
console.log(a[1])
console.log(a[3])

a[3] = 7 //Change array value

console.log("The length of the array: ", a.length)
console.log(a)
console.log(typeof a)

//Display array items using for loop
for(let i = 0; i<a.length; i++){
    console.log(a[i])
}