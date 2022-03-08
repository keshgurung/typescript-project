var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Author"] = 1] = "Author";
    Role[Role["Father"] = 2] = "Father";
})(Role || (Role = {})); // using enum
var person 
// : {
//   name: string;
//   age: number;
//   hobby: string[];
//   role: [number, string] // for tuples only. 
// }
= {
    name: 'kesh',
    age: 30,
    hobby: ['cook', 'play'],
    role: Role.Admin //[1,'father']
};
// console.log(person.hobby)
// for ( const hobbies of person.hobby){
//   console.log(hobbies)
// }
if (person.role === Role.Admin) {
    console.log('is admin');
}
