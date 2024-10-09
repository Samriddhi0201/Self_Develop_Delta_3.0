//forEach
let arr =[1 , 2 , 3 , 4 , 5];

function print (el) {
    console.log(el);
}

let array = arr.forEach(print);
console.log(array);


let array1 = arr.forEach(function (el) {
    console.log(el);
});
console.log("second way", array1);

let stud = [{
    name : "samriddhi",
    marks : 95
},
{
    name : "Mohit",
    marks : 98
},
{
    name : "sakshi",
    marks : 90
},];
console.log(stud);
stud.forEach( (student) => {
    console.log(student.marks)
});

//Map

let num = [4 , 5 , 6 , 7];
let double = num.map(function(el) {
    return el *2;
});
console.log(double);

let cgpa =stud.map((el) =>{
    return el.marks / 10;
})
console.log(cgpa);

//filter

let nums = [2 , 4 , 1 , 10 , 11 , 16 ,15 , 7 , 8 , 9 ];
let ans = nums.filter((num) => {
    return num % 2 == 0;
});
console.log(ans);


//every

let evens = [1 , 2 , 3 , 4].every((el) => (el % 2 == 0) );
console.log(evens);
 

let evenValue = [2 , 4].every((el) => (el % 2 == 0) );
console.log(evenValue);

// some

let odd = [1 , 2 , 3 , 4].some((el) => (el % 2 == 0) );
console.log(odd);
 

let odds = [1 , 3].some((el) => (el % 2 == 0) );
console.log(odds);

//reduce

let Value = [1 , 2 , 3 , 4].reduce((res,el) => (res +el));
console.log(Value);



//Maximum in Array

let arrays = [1 , 4 , 2 , 5 , 6 , 7 , 2 , 9 ,2];
// let max = -1;
 
// for(let i = 0 ; i <= arrays.length ; i++){
//     if(max < arrays[i]){
//         max = arrays[i];
//     }
// }
// console.log(max)

//Using Reduce

let max = arrays.reduce((max , el) => {
    if(max < el){
        return el;
    }
    else{
        return max;
    }
});
console.log(`maximum in array :- ${max}`)


//Default Parameter

function sum (a, b = 3){
    return a + b;
}
let add =sum(4);
console.log(add)

//spread

let array2 =[1 , 2, 3 , 4 , 5];
let minimum =Math.min(...array2);
console.log(minimum);
console.log(...array2);

let str ="apnacollege";
console.log(...str);

//with Array Literal
let array3 =[4 , 5 , 6 , 7];
let newArr = [...array3];
console.log(array3);
console.log(newArr);
newArr.push(8);
console.log(newArr);

let char = [... "hello"];
console.log(char);

let oddNo = [1 , 3 , 5 , 7 , 9];
let evenNo = [2 , 4 , 6 , 8 , 10];
console.log(...oddNo , ...evenNo);

// with Object Literals

let data = {
    email : "samriddhi_mishra@hotmail.com",
    password : "abcd",
};
console.log(data);
let dataCopy = {...data , id : 123 };
console.log(dataCopy);

//rest
function addition(...args){
    for(let i =0 ;i<args.length; i++)
    {
        console.log("you gave us :" ,args[i])
    }
}
addition(1,2,3,4)

function min(){
    console.log(arguments);
    console.log(arguments.length);
    //arguments.push(1);
}
min(4, 5 , 6 , 7);

function sum(...args){
 return args.reduce((sum , el) =>sum + el);
}
let adds =sum(4, 5 , 6 ,7);
console.log(adds);


//Destructuring

let names = ["tony", "bruce" ,"steve" , "peter"];
let [winner , runnerup,  ...others] = names;
console.log(winner , runnerup, ...others);

const student ={
    name : "karan",
    age : 19,
    class : 10,
    subjects : ["hindi" , "english" , "math" , "science"],
    username : "karan@123",
    password : "abcd",
};
let {username :user, password :secret , city = "Delhi"} = student;
console.log(user);
console.log(secret);
console.log(city)









