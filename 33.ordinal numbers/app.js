// array of numbers 1 to 9
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// lop each number in array
numbers.forEach(function (number) {
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
});
