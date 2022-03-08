function add(a, b) {
    return a + b;
}
var result = add(2, 3);
console.log(result);
//  union 
function combine(a, b) {
    var total;
    if (typeof a === 'number' && typeof b === 'number') {
        total = a + b;
    }
    else {
        total = a.toString() + b.toString();
    }
    return total;
}
var result0 = combine(4, 5);
console.log(result0);
var result1 = combine('kesh', 'siwa');
console.log(result1);
// function return 
function addNumbers(a, b) {
    return a + b;
}
var printResult;
printResult = addNumbers;
console.log(printResult(0, 1));
//  callback function
function addCallback(a, b, cb) {
    var result = a + b;
    cb(result);
}
addCallback(2, 3, function (c) {
    console.log(c);
});
