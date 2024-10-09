//Solution of Q1

let arr = [1 , 2 , 3 , 4 , 5 , 6 , 2 , 3];
let num = 2;
let result = [];
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] !== num){
        result.push(arr[i]);
    }
}
console.log(result);


//Solution of Q2

function count(num){
    let count =0
    let temp =num
while( temp != 0){
    count++;
    temp  = Math.floor(temp /10);
}
  return count ;
}
let number = 287152;
let Count = count(number);
console.log(`Number of digits in a given number ${number} is ${Count}`)


//Solution of Q3

function sum(num){
    let sum  =0
    let temp =num
while( temp != 0){
    let num =temp % 10;
    sum = sum +num;
    temp  = Math.floor(temp /10);
}
  return sum ;
}
let addDigit = 287152;
let Addition = sum(addDigit);
console.log(`Addition  of digit of  a given number ${addDigit} is ${Addition}`)


//Solution of Q4

function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        let i = 2;
        while (i <= n) {
            result *= i;
            i++;
        }
        return result;
    }
}
let n = 7;
let fact = factorial(n);
console.log(`Factorial of ${n} = ${fact}`)


// Solution of Q5

let array = [1 , 4 , 2 , 5 , 6 , 7 , 2 , 9 ,2];
let largest = 0;
 
for(let i = 0 ; i <= array.length ; i++){
    if(largest < array[i]){
        largest = array[i];
    }
}
console.log(`Largest Number in an Array ${largest}`)