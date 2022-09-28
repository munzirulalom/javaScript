let numArr = [1, 5, 45, 2, 4, 31, 5]
for(let i=0; i<numArr.length; i++){
    console.log(numArr[i])
}

//Foreach
numArr.forEach( (element) =>{
    console.log(element*element)
})

//Array.from
let str = "Hello"
let arr = Array.from(str)
console.log(arr)

//for ... of
for(let item of numArr){
    console.log(item)
}

//for ... in
for(let item in numArr){
    console.log(item)
    console.log(numArr[item])
}