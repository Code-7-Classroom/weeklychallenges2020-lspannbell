function sharePizza(slices){
    var totalSlices = slices;
    return function pizzaSlices(numPeople){
        console.log("Each person gets " + (totalSlices / numPeople).toFixed(2) + " slices of pizza.")

    }

}
var sharePizza = sharePizza(8);
console.log(sharePizza(2));                                                                                                                                                                    
  // prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); 
  // prints "Each person gets 2.67 slices of pizza"

sharePizza()

// function sharePizza1(slices){
//     var slices = 8;
//     var people = 3;
//     var servings = slices / people;
//     console.log("Each person gets " + servings + " slices of pizza.")

// }
// sharePizza1()

