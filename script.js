console.log("Hello World");



var a=10;
console.log(a);
var a="Name";
console.log(a);


//let name="John";
//console.log(name);
//let name

const pi = 3.14;
console.log(pi);
//const pi = 3.145


//Nan

let valueOne = 2;
let valueTwo = "a";

console.log(valueOne + valueTwo);

console.log(valueOne + parseInt(valueTwo));


const name = "John";
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
var y;


console.log(typeof name)
console.log('My name is ' + name + ' and I am ' + age);

//Array

arrayOne = ["John",30,true,null,undefined]
console.log(arrayOne);

arrayOne.push("Apple");
console.log(arrayOne);

//
arrayOne.pop();
console.log(arrayOne);

//unshift
arrayOne.unshift("Mango");
console.log(arrayOne);

console.log(arrayOne[1]);
console.log(arrayOne[0]);


arrayOne[3]='banana';
console.log(arrayOne);

console.log(arrayOne.length);

arrayOne.splice(3,2);
console.log(arrayOne);

let valueOnee="2";
let valueTwoo=2;

console.log(valueOnee == valueTwoo);
console.log(valueOnee === valueTwoo);


//Conditional statement

//if

let value=18;

if(value>=18){
    console.log("You are Adult");
}

// if else
let val=16;
if(val>=18){
    console.log("You are Adult");
}
else{
    console.log("You are Minor");
}

//ternary

let agee = 18;
let type = (agee>=18) ? "Adult" : "Minor"
console.log(type);


//Objects

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person);

const person1 = {
    firstName:"John",
    lastname:"Wick",
    age:40,
    eyeColor:"black"
};
console.log(person1);


const person2 = {};
person2.firstName = "Vishnu";
person2.lastName = "Manoj";
person2.age = 21;
person2.eyeColor = "black"
console.log(person2);


//accessing object

console.log(person.firstName);
console.log(person.age);
