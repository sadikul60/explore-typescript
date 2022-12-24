// Explore Type Aliases

type MyName = "Mahbuba" | "Rita";

let herName: MyName = 'Mahbuba';

// console.log(herName);

type arr = MyName[];
const arr: arr = ['Mahbuba'];
console.log(arr);

// tupple array 
type Students = [string, string, number, boolean, string];
let students: Students = ['Messi', 'Neymar', 847, true, 'Hello'];


console.log(students)