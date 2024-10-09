//node files

let n =5;
for (let i =0 ; i<5 ; i++)
{
    console.log(" Hello,", i );
}


//process
console.log(process.argv)

let args = process.argv
for (let i = 2 ; i<args.length ; i++){
    console.log("hello to" , args[i]);
}


//modules

// const someValue = require("./math");
// console.log(someValue)

// const math = require("./math");

// console.log(math)
// console.log(math.sum(2,3));
// console.log(math.mul(9,3));


// export in directory

// const info = require("./Fruits");
// console.log(info)
// console.log(info[1].color);


//import

import {sum , PI} from "./math.js";
import { generate} from "random-words";

console.log(sum(1,2))

console.log(generate())