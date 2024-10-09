function hello (){
    console.log("inside hello function")
    console.log("Hello");
}


function demo () {
    console.log("calling hello function")
    hello();
}

console.log("calling demo function");
demo();
console.log("done")


function one (){
    return 1;
}

function two (){
    return one() + one();
}

function three(){
    let ans = two() +one();
    console.log(ans);
}

three();


//Js in single threaded

setTimeout(() =>{
    console.log("Apna College");
}, 2000);

console.log("Hello set....");


//Callback hell

h1 = document.querySelector("h1");
 
function changeColor(color , delay , nextColorChange){
    setTimeout(() =>
{
    console.log(`${color} h1`)
    h1.style.color =color;
    if(nextColorChange) nextColorChange();
}, delay);
}

//callback nesting = callback hell
changeColor("red",1000, () =>{
    changeColor("orange" , 1000 , () => {
        changeColor("green" , 1000 , () => {
            changeColor("pink" , 1000)
        });
    });
});


// setTimeout(() =>
// {
//     console.log("red h1")
//     h1.style.color ="red";
// }, 1000);

// setTimeout(() =>
// {
//     console.log("orange h1")
//     h1.style.color ="orange";
// }, 2000);

// setTimeout(() =>
// {
//     console.log("green h1")
//     h1.style.color ="green";
// }, 3000);

function savetoDb(data , success , failure){
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4){
      success();
    }
    else{
    failure();
}
}

savetoDb("Samriddhi", () =>{
    console.log("success: your data was saved");
    savetoDb("hello world", () => {
        console.log("success2: your data was saved");
        savetoDb("hello ,Good Morning", () => {
            console.log("success3: your data was saved");
            
        },
        () =>{
            console.log("failure3: Weak Connection.your data not saved");
        }
    )
    },
    () =>{
        console.log("failure2: Weak Connection.your data not saved");
    }
)   
},
() =>{
    console.log("failure: Weak Connection.your data not saved");
}
);


//Promises

function savetoDbs(data){
   
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("Success : data was saved");
          }
          else{
          reject("Failure: Data was not Saved");
      }
    });
}
savetoDbs("Mohit")  //req = promise object
.then((result) =>{
    console.log("result of promise : " , result);
    console.log("Data1 saved");
   return savetoDbs("Learning Coding")
})
.then((result) =>{
    console.log("result of promise  : " , result);
    console.log("data2 saved");
    return savetoDbs("Sharddha")
 })
 .then((result) =>{
    console.log("result of promise : " , result);
 console.log("data3 saved");
}) 
.catch( (error) =>{
    console.log("error of promise : " , error);
    console.log("Promise was not resolved");
    
})

h2 = document.querySelector("h2");
function colorChange(color , delay){
    return new Promise((resolve , reject) =>{
        setTimeout(() =>{
            h2.style.color = color;
            resolve("Color Changed!");
        }, delay);
    });
}
colorChange("blue", 1000)
.then(() => {
        console.log("blue color was completed");
        return colorChange("yellow",1000)
    })
    .then(() => {
        console.log("yellow color was completed");
        return colorChange("red",1000)
    })
    .then(() => {
        console.log("red color was completed");
        return colorChange("green",1000)
    })
    .then(() => {
        console.log("green color was completed");
        return colorChange("purple",1000)
    })
    .then(() => {
        console.log("purple color was completed");
    
    })











































