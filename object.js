//  myObject = {
//     name : "Rima",
//     age : 20,
//     carName : {
//         car1 : "Ford",
//         car2 : "BMW",
//         car3 : "Fiat"
//     }
//  }

//  console.log(myObject.carName.car2);

const person = {
    firstName : "Rima",
    lastName : "Sultana",
    id : 770688,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName());