// Prototype  method
let arr1= [1 , 2 , 3]
let arr2 = [1 , 2 , 3];

arr1.sayHello = () =>{
    console.log("Hello!, I am arr");
}

arr2.sayHello = () =>{
    console.log("Hello!, I am arr");
}


//Factory Function

function PersonMaker(name , age){
  const person={
    name: name,
    age: age,
    talk(){
        console.log(`Hi, My name is ${this.name}`)
    }
  };

   return person;
}
let p1 = PersonMaker("samriddhi" , 25);
let p2 = PersonMaker("Mohit" , 25)


//Constructor(new operator) - doesnt return anything and start with Capital letters

function Person(name , age){
      this.name = name;
      this.age = age;
}

Person.prototype.talks = function(){
    console.log(`Hi, My name is ${this.name}`)
}

let p3 =new Person("Mosam" , 26);
let p4 = new Person("Samohit" , 26)

//class

class Persons{
    constructor(name, age){
        console.log("Person constructor")
    this.name = name;
    this.age = age;
    }

greet(){
  console.log(`Hi, My name is ${this.name}`)
}
}


let p5 =new Persons("sam" , 26);
let p6= new Persons("moh" , 26);


//Inhertiance
class Teacher extends Persons{
    constructor(name, age, subjects){
        console.log("Teacher constructor")
      super(name, age)
        this.subjects =subjects;
          }
  
}
class Student extends Persons {

    constructor(name, age, marks){
        console.log("Student constructor")
      super(name , age);
        this.marks =marks;
        }
}

let s1 = new Student("adam" , 26 , 59)
let t1 = new Teacher("eve",45 , "Maths")



class Mammal{   //base class
    constructor(name){
        console.log("mammal constructor")
        this.type= "warm-blooded" ;
        this.name = name;
        }

    eat(){
        console.log("I am eating");

    }
}

class Dog extends Mammal{ //child class
    constructor(name){
        console.log("Dog constructor")
        super(name);
        }
    bark(){
        console.log("wooff..");

    }
    eat(){
        console.log(`  ${this.name}is eating`)
    }
}

class Cat  extends Mammal{  //child class
    constructor(name){
        console.log("Cat constructor")
        super(name);
        }
    meoow(){
        console.log("meeow..");

    }
}

let dog1 =new Dog("tuffie")
let cat1 =new Cat("princy")