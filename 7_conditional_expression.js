let a = prompt('Hey What is your age: ')

a = Number.parseInt(a) //Convert string to number

if (a<0){
    console.log('This is a invalid age.')
} else if (a<9){
    console.log('You are a kid. You can not access.')
} else if (a<18){
    console.log('You are a kid. Please wait untill 18')
} else if (a>=18 && a>=9){
    console.log('You are ablove 18!')
} else{
    console.log('This is a invalid age!');
}

console.log('You are ', (a>=18)? 'mature' : 'kids')