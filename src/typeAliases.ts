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


type Add = (num1: number, num2: number, num3?: number) => number

 const sum : Add = (num1: number, num2: number, num3 = 0) => {
    return num1 + num2 + num3;
}

const total = sum(40, 45);


console.log(total)