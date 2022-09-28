let a = "Rahim"

console.log(a.length)
console.log(a.toLowerCase())
console.log(a.toUpperCase())
console.log(a.slice(2))
console.log(a.slice(2, 4))//Display from 2 to 4 index
console.log(a.replace("Rah", "Kar"))

let b = "Karim"
console.log(a.concat(" is a freind of ", b, " !"))

let c = "         Some Space              "
console.log(c)
console.log(c.trim())

let d = "Some String"
for(let i = 0; i<d.length; i++)
    console.log(d[i])