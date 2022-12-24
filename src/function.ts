// function declaration of TypeScript

//=====================================
// function add(num1: number, num2: number) : void {
//     console.log(num1 + num2)
// };

// add(20, 50);


//===================================
// function add(num1: number, num2: number) : number {
//     return num1 +num2;
// };

// const result = add(20, 100);
// console.log(result)

//===================================
// arrow function declaration
// const add = function(num1: number, num2: number) :number {
//     return num1 +num2;
// }

//=====================================
// const add = (num1: number, num2: number) :number => {
//     return num1 +num2;
// }
// const result = add(20, 100);

//=====================================
// const add = (num1: number[], num2: number) :number => {
//     return num1[0] +num2;
// }
// const result = add([20], 100);

//======================================
// const add = (num1: number, num2: number, num3: number) :number => {
//     return num1 + num2 + num3;
// }

// const result = add(30, 40, 25);

//=====================================
// const add = (num1: number, num2: number, num3?: number) :number => {
//     return num1 + num2 + (num3 || 0);
// }

// const result = add(30, 40);

//===================================
// const add = (num1: number, num2: number, num3: number = 0) :number => {
//     return num1 + num2 + num3;
// }

// const result = add(30, 45);

//===================================
// Rest operator
// const add = (...numbers: number[]) :number => {
//     return numbers.reduce((pre, curr) => pre + curr, 0);
// }

// const result = add(23, 21, 12, 4, 34, 25, 56, 212);

//========================================
// function signeture (usefull)
// let add: (num1: number, num2: number, num3?: number) => number;
// add = (num1, num2, num3 = 0) => {
//     return num1 + num2 + num3;
// }

//=======================================
let add: Function;
add = (num1: number, num2: number, num3 = 0) => {
    return num1 + num2 + num3;
}

const result = add(40, 45);
console.log(result)