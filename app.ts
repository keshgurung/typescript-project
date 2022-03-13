

function add(a:number,b: number){
  return a + b
}

const result = add(2,3)
console.log(result)

//  union 

function combine(a:number | string ,b: number | string ){
  let total
  if (typeof a === 'number' && typeof b === 'number'){
    total = a + b
  } else {
    total = a.toString() + b.toString()
  }
  return total 
}
const result0 = combine(4,5)
console.log(result0)

const result1 = combine('kesh','siwa')
console.log(result1)

// function return 

function addNumbers(a:number , b:number){
  return a + b
}

let printResult : (num1: number, num2: number) => number 
printResult = addNumbers
console.log(printResult(0,1))

//  callback function

function addCallback(a:number, b:number, cb:(num: number) => void){
  const result = a + b
  cb(result)
}

addCallback(2,3,(c)=>{
  console.log(c)
})

// creating a class.

class Department {
//  private id: string
//  private name: string
 private employee : string [] = [] //only accesible inside the class department only not feom outside.

 constructor( private id: string, public name: string) { //this is easy
  //  this.name = name
  //  this.id = id
 }

 //  describe logic of our method
 describe ( this: Department ) { 
   console.log(`department: ${this.id} is ${this.name}`)
 }

 addEmployeee(employee: string){
   this.employee.push(employee)
 }
 
 printEmployeeInfo(){
   console.log(this.employee)
 }
}

// Inheritance 
class ItDepartment extends Department {
  admins: string[]

  // if empty it will get all data from base class.

  constructor (id: string, admins: string[]) {
    //we dont want admins to be in the base class i.e Department. 
    // so we add a new field fpr admin in our it class

    super(id, 'IT') //when we need to add a new const in our child class imppp
    this.admins = admins
  }
}
// const It = new ItDepartment('Accounting', '1')

const it = new ItDepartment('i1', ['kesh'])

//changing from outside, bad approach , can be changed though.. 
// typescript makes a validation so that this can be private and not public.. 
// it.employee[2] = 'kesh2' 

it.printEmployeeInfo()

console.log(it)
it.describe()

