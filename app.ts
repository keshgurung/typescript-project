

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

