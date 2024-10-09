//async keyword

async function greet(){
 //  throw "some random error"
    return "Hello";
}
// let greeting = greet();
// console.log(greeting);
greet()
.then((result) =>{
    console.log("promise was resolved");
    console.log("reult was : " ,result);
})
.catch((err) => {
    console.log("Promise was rejected with err : " , err);
})

let demo = () =>{
    return 5;
};
console.log(demo());


function getNum(){
    return new Promise((resolve , reject)=> {
       setTimeout(() =>{
        let num =Math.floor(Math.random() *10) + 1 ;
       console.log(num);
       resolve();
       }, 1000);
    });
}

async function demo1(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}
console.log(demo1())


h1 = document.querySelector("h1");
function colorChange(color , delay){
    return new Promise((resolve , reject) =>{
        setTimeout(() =>{
            let num1 = Math.floor(Math.random()*5)+1;
            if(num1 > 3){
                reject("Promise Rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}`)
            resolve("Color Changed!");
        }, delay);
    });
}

async function demos(){
    try{
    await colorChange("red" , 1000);
    await colorChange("orange" , 1000);
    await colorChange("green", 1000);
    await colorChange("blue" , 1000);
    }
    catch(err){
        console.log("Error Caught");
        console.log(err)
    }
    let a =5;
    console.log(a);
    console.log("new num : ", a+3);
}
console.log(demos());


//JSoN Data

let jsonRes =' {"fact":"Neutering a cat extends its life span by two or three years.","length":60}';
console.log("json : ",jsonRes);
let validRes = JSON.parse(jsonRes);
console.log("valid : " ,validRes);
console.log("fact : " , validRes.fact);

let student = 
{
    name : "Samriddhi",
    marks :" 97%",
}
let stud = JSON.stringify(student);
console.log(stud);

//Our first request
let url = "https://catfact.ninja/fact";
fetch(url)
.then((response) => {
    console.log("res : " ,response);
   return  response.json();
})
.then((data) => {
    console.log("Data1" , data.fact);
    return fetch(url);
})
.then((response) => {
   
   return  response.json();
})
.then((data2) => {
    console.log("Data2 : ", data2.fact);
    
})
.catch((err) => {
    console.log("Error : " ,err)
})
console.log("fetch : ",fetch(url));
console.log("I am Happy");

let url2 = "https://dog.ceo/api/breeds/image/random";
async function getFacts() {
    try{
   let res = await fetch(url2);
   let data = await res.json();
   console.log("result :: ", res)
   console.log("datas :: ", data.fact)

   let res2 = await fetch(url2);
   let data2 = await res2.json();
   console.log("result2 :: ", res2)
   console.log("datas2 :: ", data2.fact)
    }
    catch(e){
        console.log("error" , e)
    }
}
console.log(getFacts());















































