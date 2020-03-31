var tom = new Array('Tom', 9, 'inches', 8, 'pounds')
var jerry = new Array('Jerry', 10, 'centimeters', 45, 'grams')
var people = new Array(tom,jerry)

function convert (number, measurement) {

if (measurement === 'inches') {
    return (number/39.37);
}

else if (measurement === 'pounds') {
    return (number/2.205);
}

else if (measurement === 'centimeters') {
    return (number/100);
}

else if (measurement === 'grams') {
    return (number/1000);
}
}

function BMI (mass, height) {
    var convertMass = coonvert()
}
