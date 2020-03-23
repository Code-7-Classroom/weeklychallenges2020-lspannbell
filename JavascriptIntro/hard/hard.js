// // var x = 10
// // var y = 5

// // function addition (x, y){
// //     return x * y;
// // }

// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1998);
// var ageLisa = calculateAge(1994);
// console.log(ageJohn, ageMike, ageLisa)


// function yearsUntilRetire(birthYear, firstName) {
//     var age = calculateAge(birthYear);
//     var retirement = 65 - age;
//     console.log(firstName + ' retires in ' + retirement + ' years.')
// }
// yearsUntilRetire(1990, 'John');


// // function declaration
// function calculateNumber(number) {
//     return 10 - number
// }

// var firstProblem = calculateNumber(4);
// var secondProblem = calculateNumber(5);
// var thirdProblem = calculateNumber(2);
// var fourthProblem = calculateNumber (10);
// console.log(firstProblem, secondProblem, thirdProblem, fourthProblem)



// // function expression

// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + 'teaches kids to code';
//         case 'driver':
//             return firstName + 'drives a cab';
//         case 'designer':
//             return firstName + 'designs websites';
//         default:
//             return firstName + 'does something else';
//     }

// }
// console.log(whatDoYouDo('teacher', 'Allen '));
// console.log(whatDoYouDo('driver', 'Jane '));
// console.log(whatDoYouDo('designer', 'Lilly '));


var number = 10
var theAnswer = function(type){
    switch(type) {
        case 'add':
            return number + ' plus 2 equals 12';
        case 'subtract':
            return number + ' minus 2 equals 8';
        case 'multiply':
            return number + ' times 2 equals 20';
        case 'divide':
            return number + ' divided by 2 equals 5';

    }
}
console.log(theAnswer('add', 'number '))
console.log(theAnswer('subtract', 'number '))
console.log(theAnswer('multiply', 'number '))
console.log(theAnswer('divide', 'number '))


function addNumbers (numberOne, numberTwo) {
    var x =  ;
    var y =  ;
    var sum = 0
    sum = (x) = (y)
    alert("sum is ": + sum)
}
