const input1 = [1, 4, 7];
const output1 = () => {
    let sum = input1.reduce(function(a, b){
        return a + b;
    },0);
    console.log(sum / input1.length);
}
output1()

const input2 = [10, 5];
const output2 = () => {
    let sum = input2.reduce(function(a, b){
        return a + b;
    },0);
    console.log(sum / input2.length);
}
output2()

const input3 = [1.5, 3, 2.5, 1];
const output3 = () => {
    let sum = input3.reduce(function(a, b){
        return a + b;
    },0);
    console.log(sum / input3.length);
}
output3()