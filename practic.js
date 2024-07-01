// const car = {
//     type: "Fiat",
//     model:"500",
//     color:"white"
// }
// console.log("This car name is " + car.type);

// const person = {
//     firstName: "Rima",
//     lastName: "Sultana",
//     age: 20,
//     eyeColor:"blue"
// };
// console.log(person.firstName + " is " + person.lastName) ;


// empty object

// const person = {};

// person.firstName = "Rima";
// person.lastName  = "Sultana";
// person.age = 20;
// person.eyeColor = "blue";

// console.log(person.firstName + " is " + person.age  + " " + "years old");


// const person = new Object();
// person.firstName = " Roma";
// person.lastName = "Sultna";
// person.age = 20;
// person.eyeColor = "blue";
//  console.log(person.firstName + " is " + person.age + ' ' + "years old") ; 

// const person = {
//     firstName: "Rima",
//     lastName : "Sultana",
//     age : 20,

// }
// // console.log("The last Name is " + person.lastName);

// console.log("The first Name is " + person["firstName"]);


// const person = {
//     firstName: "Rima",
//     lastName: "Sultana",
//     age:20,
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }

// }
// console.log(person.fullName());


// const person = {
//     firstName: "Rima",
//     lastName: "Sultana",
//     age:20,
// }
// const x = person;

// x.age = 40;
//  console.log(person.firstName + person.age);


// accessing the object property

// let age = person.age;
// let age = person["age"];
// let age = person[x];

const person = {
    firstName: "Rima",
    lastName : "Sultana",
    age : 20,
    eyeColor: "blue"
};

let x = "firstName";
let y = "age";
// console.log(person["firstName"]);
console.log(person[x] + person[y]);