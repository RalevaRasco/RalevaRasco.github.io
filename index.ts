console.log("Hello Oscar")

class Animal {
    name: String
    heartRate: Number;

    constructor(name: string, heartRate: number) {
        this.name = name;
        this.heartRate = heartRate;
    }

    introducion() {
        console.log("Hi my name is " + this.name + " and my heart rate is " + this.heartRate)
    }
}

let charlie: Animal = new Animal("Charlie", 42);
let danelle: Animal = new Animal("Danelle", 999);

charlie.introducion()
danelle.introducion()

class Mathematician {
    num1: number
    num2: number

    constructor(num1: number, num2: number){
        this.num1 = num1
        this.num2 = num2
    }

    add() {
        console.log(this.num1 + " + " + this.num2 + " = " + (this.num1 + this.num2))
    }
    subtract(){
        console.log(this.num1 + " - " + this.num2 + " = " + (this.num1 - this.num2))
    }
}

let JoMama: Mathematician = new Mathematician(22, 11)
let JoMamav2: Mathematician = new Mathematician(44, 22)

JoMama.add()
JoMama.subtract()
JoMamav2.add()
JoMamav2.subtract()

// charlieName = charlie.name;
// console.log("This animal is named " + charlieName);


// console.log("Charlie's current Heartrate is " + charlie.heartRate)
// charlie.heartRate = 999
// console.log("Charlie's current Heartrate is " + charlie.heartRate)