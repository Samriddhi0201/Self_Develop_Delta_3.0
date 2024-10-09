//Solution of Q1

const arrayAverage =(arr) =>{
    let len = arr.length;
    let sum =0;
    let avg;
    for(let i =0 ; i < len ; i++){
        sum= sum +arr[i];
        avg =sum/len;
    }
    return avg;
}
let arr =[4 , 7 , 10 , 8 , 9 , 15 , 1 , 12 , 5 , 11];
let averageArr= arrayAverage(arr);
console.log(averageArr);


//Solution of Q2

const isEven =(num) =>
{
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }

}
let n =8;
let even = isEven(n);
console.log(even);


// Solution of Q3

const object = {
    message : 'Hello, World!',
    logMessage()
    {
    console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);


//Solution of Q4

let length = 4;
function callback() {
   console.log(this.length);
} 

const objects ={
    length : 5,
    method(callback) {
        callback();
    },
}; 
objects.method(callback,1,2);