console.log("hello world")

let meaningOfLife: number
meaningOfLife = 42
console.log(meaningOfLife)
let choices: boolean = false
if(meaningOfLife<50){
    console.log("meaningOfLife is less than 50")
} else{
    console.log("meaningOfLife is more than 50")
}
function sum(num1: number, num2: number): number{
    return num1 + num2
}
function difference(num1: number, num2: number): number{
    return num1 - num2
}
let result: number = sum(100, 100)
let result2: number = difference(10, 11)
console.log(result, result2)

interface hotPot{
    isItSpicy: boolean
    spiceyRating: number
spicyName
}