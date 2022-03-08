
enum Role { Admin, Author, Father} // using enum 0 is admin and soon can make 
// make admin = 1 and others increments too otherwise admin is 0. 

const person 
// : {
//   name: string;
//   age: number;
//   hobby: string[];
//   role: [number, string] // for tuples only. 
// }
 = {
   name: 'kesh',
   age: 30,
   hobby: ['cook','play'],
   role: Role.Admin // equals to [0,'Admin']
 }

// console.log(person.hobby)
// for ( const hobbies of person.hobby){

//   console.log(hobbies)
// }

if (person.role === Role.Admin){
  console.log('is admin')
}