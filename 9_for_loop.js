/** For Loop */
for(let i=0; i<34; i++){
    console.log(i);
}

/** For In Loop */
let obj = {
    a:10,
    b:15,
    c:50,
    d:21
}
for (let a in obj){
    console.log("Value of " + a + " are " + obj[a]);
}

/** For Of Loop */
for(let b of "Hello World"){
    console.log(b);
} 