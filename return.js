// function add (number1, number2){
//     console.log(number1, number2);
//     var sum = number1 + number2;
//     return sum;
// }

// var total = add(80, 20);
// console.log('totol',totol);


function getAverage(marks1, marks2, marks3){
    const total = marks1 + marks2 + marks3;
    const average= total / 3;
    return average;
}

const marks1 = 60;
const marks2 = 58;
const marks3 = 59;


var myAverage = getAverage(marks1, marks2, marks3);
console.log('my average so far:', myAverage);