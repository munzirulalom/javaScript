/** 1. Write a program to print the markes of a student in an object using for loop */
let marks = {
    harry: 98,
    rohan: 70,
    aakash: 7
}

for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

/** Write the program in Q1 using FOR IN loop */
for(let key in marks){
    //console.log(key)
    console.log("The mark of " + key + " are " + marks[key])
}

/** 3. qrite a program to print "try agaon" umtil the user enters the correct number */
let correctNumer = 5
let i
// while(i != correctNumer){
//     console.log("try again")
//     i = prompt("Enter a numer: ")
// }

/** 4. Write a function to find mean of 5 number */
const meanNumber = (a, b, c, d, e) => {
    return (a+b+c+d+e)/4
}
console.log(meanNumber(4,2,3,7,5))