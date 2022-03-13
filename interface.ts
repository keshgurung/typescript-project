interface Person {
  name: string;
  age: number;

  greet(phrase:string):void //method
}

let user1: Person 
user1 = {
  name: 'kesh',
  age: 10,
  greet(phrase:string){
    console.log(phrase + this.name)
  }
}

user1.greet('hi there')

// generics

a type connected to another type so that we want to know what another type is,
so typescript can know what to support.

const names: Array <string> = [];
//names[0].split(' ')

// - another is promises type:
 
const promise : Promise <number> = new Promise ((resolve, reject) => {
  setTimeout(()=>{
    resolve('this is done')
  }, 2000)
})
