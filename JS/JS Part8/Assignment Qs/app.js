 // Solution of Q1

let arr =[1 , 2 , 3 , 4 , 5 , 6 , 7 , 8, 9 , 10]
const square = arr.map((arr) => arr*arr);
console.log(`Square of array element is : ${square}`);

const sum = square.reduce((acc , cur) => acc +cur , 0);
console.log(`Sum of array element is : ${sum}`);

let avg = sum /arr.length;
console.log(`Average of array element is : ${avg}`);


// Solution of Q2

let array = [2 , 3 , 4 , 5 , 6 , -4 , -8]
const newArr = array.map((array) => array+5);
console.log("Origial Array :", array)
console.log("New Array :" , newArr);


// Solution of Q3

let wordArr = ["apna" , "college" , "javascript" ,"delta" , "course"];
const newWordArr = wordArr.map((wordArr) => wordArr.toUpperCase());
console.log(newWordArr);


// Solution of Q4

const doubleAndReturnArgs =(arr,...args)=>
[...arr,
    ...args.map((v)=>v*2),
];
let double = doubleAndReturnArgs([1,2,3],4,4);
console.log(double);
let doubled = doubleAndReturnArgs([2],10,4)
console.log(doubled)


// Solution of Q5

const  mergeObjects = (obj1 , obj2) => ({ ...obj1 , ...obj2});
let merge = mergeObjects({a : 1 , b : 2 } , { c : 3 , d : 4 });
console.log(merge);