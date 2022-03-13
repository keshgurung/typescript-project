"use strict";
function add(a, b) {
    return a + b;
}
const result = add(2, 3);
console.log(result);
//  union 
function combine(a, b) {
    let total;
    if (typeof a === 'number' && typeof b === 'number') {
        total = a + b;
    }
    else {
        total = a.toString() + b.toString();
    }
    return total;
}
const result0 = combine(4, 5);
console.log(result0);
const result1 = combine('kesh', 'siwa');
console.log(result1);
// function return 
function addNumbers(a, b) {
    return a + b;
}
let printResult;
printResult = addNumbers;
console.log(printResult(0, 1));
//  callback function
function addCallback(a, b, cb) {
    const result = a + b;
    cb(result);
}
addCallback(2, 3, (c) => {
    console.log(c);
});
// creating a class.
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //  private id: string
        //  private name: string
        this.employee = []; //only accesible inside the class department only not feom outside.
        //  this.name = name
        //  this.id = id
    }
    //  describe logic of our method
    describe() {
        console.log(`department: ${this.id} is ${this.name}`);
    }
    addEmployeee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employee);
    }
}
// Inheritance 
class ItDepartment extends Department {
    // if empty it will get all data from base class.
    constructor(id, admins) {
        //we dont want admins to be in the base class i.e Department. 
        // so we add a new field fpr admin in our it class
        super(id, 'IT'); //when we need to add a new const in our child class imppp
        this.admins = admins;
    }
}
// const It = new ItDepartment('Accounting', '1')
const it = new ItDepartment('i1', ['kesh']);
//changing from outside, bad approach , can be changed though.. 
// typescript makes a validation so that this can be private and not public.. 
// it.employee[2] = 'kesh2' 
it.printEmployeeInfo();
console.log(it);
it.describe();
