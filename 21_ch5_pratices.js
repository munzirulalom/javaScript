/** 1. Create an array of numbers and take input from the user to add numbers to this array */
let arr = [10, 25, 30, 56, 4]
arr.push(36)
console.log(arr)

/** 2. keep adding number to the array in (1) until 0 is added to the array */
/*let num;
do{
    num = prompt("Enter a number: ")
    num = Number.parseInt(num)
    arr.push(num)
}while(num != 0)
console.log(arr)*/

/** 3. Filter for numbers divisible by 10 from a givien array */
let a = arr.filter((x)=>{
    return x%10 == 0
})
console.log(a)

/** 4. Create an arry of square of given numbers */
let b = arr.map((x)=>{
    return x*x
})
console.log(b)