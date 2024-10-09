 function hello() {
    console.log("Hello");
 }
 hello();


function printName(){
    console.log("This is Samriddhi Mishra.")
    console.log("I am learning Mern Full Stack")
}

printName();


function print1to5(){
    for(let i=1 ;i<=5;i++){
        console.log(i);
    }
}

print1to5();


function isAdult(){
    let age = 18;
    if(age >= 18){
        console.log("Adult");
    }
    else{
        console.log("Not Adult");
    }
}
isAdult();



// funtion with Arguement

function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}
printInfo("Samriddhi", 23);
printInfo("Mohit");



function sum (a,b){
    console.log(`sum is ${a+ b}`)

}

sum(1,2);
sum(47,48);
sum(100 , 999);

//return keyword

function diff(a,b){
    return (a-b);
}
let difference = diff(50,40);
console.log(difference)


//function  expression
let pow = function(a,b) {
    return a**b;
}
let powerExp = pow(2,3)
console.log(powerExp)


function multipleGreet(func , count){
    for(let i =1 ;i <= count ;i++){
        func();
    }
}
let greet =function() {
    console.log("hello");
}
multipleGreet(function (){console.log("namaste")} ,20);







function oddOrEvenFactory(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2 == 0));
        }
        return odd;
    }
    else if(request == "even"){
          let even = function(n){
       console.log((n%2 == 0));
     } 
     return even;
    }
    else{
        console.log("wrong request");
    }
}
let request = "odd"
console.log(oddOrEvenFactory(request))


//Methods

const calculator ={
    add : function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a- b;
    },
    mul : function(a,b){
        return a*b;
    }
};
console.log(calculator);
console.log(calculator.add);
console.log(calculator.add(5,6));
console.log(calculator.sub);
console.log(calculator.sub);
console.log(calculator.sub(10,9));
console.log(calculator.mul);
console.log(calculator.mul(42,2));


























