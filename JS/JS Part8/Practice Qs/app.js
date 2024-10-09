// Solution of Q1

let arr = [10, 20 , 40 , 50, 70 , 60];
let isMultiple = arr.every((el) => (el % 10 == 0));
console.log(isMultiple);


// Solution of Q2
let array = [0 , -1 ,-5, 4 , 2 , 5 , 6 , 7 , 2 , 9 ,2];
let min = array.reduce((min ,el ) =>{
    if(min >el){
        return el;
    }
    else{
        return min;
    }
});
console.log(`Minimum number in array :- ${min}`);