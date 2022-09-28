let arr = [1, 8, 6, 7, 25, 34, 5]

//Array map
let a = arr.map((value, index, array)=>{
    console.log(value, index, array)
    return value+index
})
console.log(a)

//Array Filter
let arr2 = [1, 8, 6, 7, 25, 34, 5]
let a2 = arr2.filter((value)=>{
    return value<10 //Return array value which is less than 10.
})
console.log(a2)

//Array Reduce
let arr3 = [1, 8, 6, 25, 25, 34, 5]
let a3 = arr3.reduce((item1, item2)=>{
    return item1 + item2
})
console.log(a3)