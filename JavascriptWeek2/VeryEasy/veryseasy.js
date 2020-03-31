var arr = [70, 65, 3, 21, 58, 93, 12, 82, 15, 34, 73, 2, 12];
var max = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= max) {
        max = arr[i];
    }
}
console.log(max)