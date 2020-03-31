var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
'September', 'October', 'November', 'December')
var input= prompt(' What number month were you born? ')


function getMonth(number) {
var minusOne= number -1

if (number > 12 || number < 1) {
    return alert(' Please enter a number 1-12 ')
}

else {
return months[minusOne]
}
}
console.log(getMonth ( parseInt(input)))


