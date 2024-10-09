//try

const student = {
    name:"Samriddhi",
    age: 23,
    eng : 95,
    math :93,
    phy: 97,
    getAvg() {
        console.log(this)
        let avg =(this.eng + this.math + this.phy)/3;
        console.log(avg)
    }
}
console.log(student.getAvg());

//try and Catch
console.log("hello")
try{
    console.log(a)
}
catch(e){
    console.log("Variable does not exist ")
    console.log(e);
}
 

//arrow Function
const sum = (a, b) =>{
    console.log(a+b);
}
console.log(sum)

const cube= (n) =>{
    return n * n * n;
}
let cubes = cube(5);
console.log(cubes)

const power = (a, b) =>{
    return a ** b;
}
let pow =power(4,3)
console.log(pow);

const hello =() =>{
    console.log("hello world")
}
console.log(hello());

const mul = (a , b) =>  a * b;
let multiple =mul(6, 9);
console.log(mul(6,9));

//SetTimeout
console.log("hi there!");
setTimeout ( () =>{
    console.log("Apna College");
}, 4000);

console.log("welcome to");

//SetInterval

console.log("Hello There");
let id = setInterval ( () =>{
    console.log("Apna College");
}, 2000);

console.log(id);
clearInterval(id);


const stud ={
    name : "samriddhi",
    marks : 95,
    prop : this,  //global scope
    getName : function () {
        console.log(this);
        return this.name;
    },
    getMarks :  () => {
        console.log(this); //parent scope -> window
        return this.marks;
    },
    getInfo1 : function () {
        setTimeout ( () => {
            console.log(this);   //stud object
            console.log("Samriddhi Mishra")
        }, 2000);
    },
    getInfo2 : function () {
        setTimeout ( function () {
            console.log(this); //window object
            console.log("Samriddhi Mohit Sharma")
        }, 2000);
    },
};
console.log(stud);
console.log(stud.getName());
console.log(stud.getMarks());
console.log(stud.getInfo1());
console.log(stud.getInfo2());

const a =5;  //global scope
console.log(a);
