let names = ['lui', 'mario', 'cole'];

let numbers = [2,4,6,6];
numbers.push(5);

let mixed = ["ken", 'chun-li', 9, 0];

mixed.push("rtr");
mixed.push(4);


let ninja = {
    name: 'mario',
    belt : true,
    age: 40
}
ninja = {
    name: 'mariogg',
    belt : false,
    age: 40
}

let character: string;
let age:number;
let isLogged: boolean;

character = "tinega";


let icons: string[] = [];
icons.push("fhfj")

const add = (num:number, num2:number)=>{
    return num + num2
}

let myAge:any = 45;
myAge= "new age ";
myAge = {
    age: 22,
    name: "collins"
}
console.log(myAge);

let mixedArray: any[] = [];

mixedArray.push("tinega")
mixedArray.push(7)
mixedArray.push(true)

console.log(mixedArray);

let ninjaObject: {name:string,age:boolean};
ninjaObject = {
    name: "string",
    age: true
}
let anyNinja: { name: any, age: any}
anyNinja= {
    name: 5,
    age: "gut"
}
console.log("compilled")

let dead:boolean;
dead = true;

let great = ()=>{
    console.log("hello");
}

const addNumbers = (a:number,b:number, c: number = 10) =>  {
    console.log(a+b+c);
    console.log(c)
}
addNumbers(2,3,4)

const minus = (a:number,b:number): number =>{
    return a - b;
}
const result = minus(2,4);

type objWithName = {
    name: string,
    age: number,
    alive: boolean
}
const person = (user: objWithName)=>{
    return user
}
console.log(person({name:"collo",age: 5, alive: true}));

type stringNameOrBoolean = string|number

const check = (name:stringNameOrBoolean)=>{
    console.log(name)
}
check(4)

